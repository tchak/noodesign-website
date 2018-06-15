#!/bin/bash

ember deploy production --activate --verbose
scripts/netlifyctl deploy -A $NETLIFY_TOKEN -P ./build
