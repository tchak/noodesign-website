#!/bin/bash

ember deploy production --activate --verbose
scripts/netlifyctl deploy -m "$TRAVIS_COMMIT_MESSAGE ($TRAVIS_COMMIT)" -A $NETLIFY_TOKEN -P ./build
