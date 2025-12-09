#!/bin/bash
set -e

# Format all markdown files using prettier
# --print-width 80: Wrap at 80 characters
# --prose-wrap always: Wrap markdown text as prose
# --ignore-path .gitignore: Respect gitignore
npx -y prettier --write "**/*.md" --print-width 80 --prose-wrap always --ignore-path .gitignore
