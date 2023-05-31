#!/bin/sh

# Decrypt the file
# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$CONFIG_SECRET_PASSPHRASE" \
--output config.toml config.toml.gpg
