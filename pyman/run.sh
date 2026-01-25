#!/bin/bash

python3 -m mypy pyman/hangman.py

rm -r .mypy_cache

python3 pyman/hangman.py