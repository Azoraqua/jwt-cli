# jwt-cli
A simple command-line tool for encoding and decoding JWT tokens.

## Commands
- Encode: `npx jwt-cli encode --secret=SECRET TEXT`
- Decode: `npx jwt-cli decode --secret=SECRET TOKEN`

## Scripts
- encode.sh: `echo 'TEXT' | scripts/encode.sh --secret=SECRET`
- decode.sh: `echo 'TOKEN' | scripts/decode.sh --secret=SECRET`
