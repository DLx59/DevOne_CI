#!/bin/bash

# Display debug in console
set -xe

# Get the exit code of the previous command (ng test)
EXIT_CODE=$?

# Print the test results
if [ $EXIT_CODE -eq 0 ]; then
  echo "Tests passed successfully!"
else
  echo "Tests failed!"
fi

# Exit with the exit code of the previous command
exit $EXIT_CODE
