#!/bin/bash

# We need to install dependencies only for Docker
[[ ! -e /.dockerenv ]] && exit 0

# Display debug in console
set -xe

# Require dependencies
npm install

# Prepare build prod
ng config -g cli.warnings.versionMismatch false
