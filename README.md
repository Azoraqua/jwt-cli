# jwt-cli
A simple command-line tool for encoding and decoding JWT tokens.

## Commands
- Encode: `npx jwt-cli encode --secret=SECRET TEXT`
- Decode: `npx jwt-cli decode --secret=SECRET TOKEN`

## Scripts (Can be used for piping)
- Encode: `echo 'TEXT' | scripts/encode.sh --secret=SECRET`
- - Encode: `echo 'TOKEN' | scripts/decode.sh --secret=SECRET`
