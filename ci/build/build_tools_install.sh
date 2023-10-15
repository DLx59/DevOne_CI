#!/bin/bash

# We need to install dependencies only for Docker
[[ ! -e /.dockerenv ]] && exit 0

# Display debug in console
set -xe

# Install Angular CLI locally without using global permissions
npm install -g @angular/cli@16.1.1
