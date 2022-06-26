#!/usr/bin/env sh

# Pipes the output of the previous command to the decode function.
xargs -I{} npx @azoraqua/jwt decode $1 {}