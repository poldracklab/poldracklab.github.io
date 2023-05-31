#!/bin/sh

# Decrypt the file
# --batch to prevent interactive command
# --yes to assume "yes" for questions
mkdir .config
gpg --quiet --batch --yes --decrypt --passphrase="$TOKEN_PASSCODE" \
--output /home/runner/.config/pybliometrics.cfg config.ini.gpg
