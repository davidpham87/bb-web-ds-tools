Title: Polyglot Data Science: A Frankenstein's Monster of Languages Date:
2025-11-24 Tags: clojure, data-science

---

Data Science is a divided world. In one corner, you have the Python people, who
have a library for everything and an indentation error for everyone. In the
other corner, the R people, who love statistics and creating variable names that
look like they were typed by a cat walking across a keyboard.

Usually, these two groups live in separate silos, throwing shade at each other
on Stack Overflow. But we asked: **"Why not force them to live together in a
single browser tab like a twisted reality TV show?"**

## Python via Pyodide: Look Ma, No Pip!

We integrated **Pyodide**, which is CPython compiled to WebAssembly. This allows
you to run Python in the browser.

"But wait," I hear you cry, "How do I `pip install` my dependencies?" You don't.
Or rather, you do, but it’s weird. It loads wheels from the internet. It’s
magic. It’s terrifying. It means you can run Pandas without ever having to
figure out why your local Anaconda installation is currently broken.

## R via WebR: Statistics Without the Server

We also shoved **R** in there using **WebR**. Now you can perform advanced
statistical analysis and generate plots right next to your Python code. It’s
like having a math professor living in your Chrome tab, silently judging your
p-values.

## ClojureScript via SCI: The Hipster Choice

And because we’re masochists—sorry, _purists_—we included **ClojureScript** via
the **Small Clojure Interpreter (SCI)**.

Why? Because parentheses are hugging. And who doesn't need a hug when their
regression model fails to converge? The SCI REPL lets you hack the dashboard
itself. You can change the state, fire events, and break the UI in new and
exciting ways.

## Why Do This?

Because context switching is for suckers. Because setting up three different
language environments on your local machine is a punishment reserved for the
deepest circles of Dante’s Inferno.

Here, they all run in the same sandbox. It’s chaos. It’s anarchy. It’s
**Polyglot**.

Go ahead, write R code that calls a Python script that helps you write Clojure.
We won't stop you. God might, but we won't.
