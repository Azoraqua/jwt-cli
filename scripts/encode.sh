#!/usr/bin/env sh

# Pipes the output of the previous command to the encode function.
xargs -I{} npx @azoraqua/jwt encode $1 {}