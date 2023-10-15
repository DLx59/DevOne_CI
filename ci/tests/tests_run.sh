#!/bin/bash

# We need to install dependencies only for Docker
[[ ! -e /.dockerenv ]] && exit 0

# Display debug in console
set -xe

# Set the CHROME_BIN variable to point to the Chrome binary
export CHROME_BIN=`find $CI_PROJECT_DIR/node_modules/puppeteer -name "chrome"`

# Start Angular tests using locally installed Angular CLI
node_modules/.bin/ng test --code-coverage=false --watch=false
