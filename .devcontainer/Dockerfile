FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bullseye

# Intall vim
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y vim \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Install npx playwright install chromium --with-deps
RUN npx playwright install chromium --with-deps
