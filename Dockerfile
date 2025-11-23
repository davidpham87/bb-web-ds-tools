FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# Install core utilities
RUN apt-get update && apt-get install -y \
    curl \
    git \
    wget \
    unzip \
    gnupg \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Install Java 21 (Temurin)
RUN wget -O - https://packages.adoptium.net/artifactory/api/gpg/key/public | tee /etc/apt/trusted.gpg.d/adoptium.asc \
    && echo "deb https://packages.adoptium.net/artifactory/deb $(awk -F= '/^VERSION_CODENAME/{print$2}' /etc/os-release) main" | tee /etc/apt/sources.list.d/adoptium.list \
    && apt-get update && apt-get install -y temurin-21-jdk \
    && rm -rf /var/lib/apt/lists/*
ENV JAVA_HOME=/usr/lib/jvm/temurin-21-jdk-amd64

# Install Node.js 18
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# Install Babashka
RUN curl -sL https://raw.githubusercontent.com/babashka/babashka/master/install | bash

# Install Clojure
RUN curl -L -O https://github.com/clojure/brew-install/releases/latest/download/linux-install.sh \
    && chmod +x linux-install.sh \
    && ./linux-install.sh \
    && rm linux-install.sh

# Install Playwright and Browsers
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright
RUN mkdir -p /ms-playwright
RUN pip3 install playwright
RUN playwright install --with-deps chromium

# Install Google Chrome for Karma
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list \
    && apt-get update && apt-get install -y google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*
ENV CHROME_BIN=/usr/bin/google-chrome

# Pre-install npm dependencies and Clojure dependencies to /opt/app
# We use /opt/app so it doesn't conflict with /github/workspace mount but can be referenced
RUN mkdir -p /opt/app
WORKDIR /opt/app

# Cache Clojure deps
COPY deps.edn /opt/app/deps.edn
RUN clojure -P

# Cache npm deps
COPY package.json /opt/app/package.json
RUN npm install

# Set environment variables to use the pre-installed modules
ENV PATH="/opt/app/node_modules/.bin:${PATH}"
ENV NODE_PATH="/opt/app/node_modules"

WORKDIR /github/workspace
