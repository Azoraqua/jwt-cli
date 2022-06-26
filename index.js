#!/usr/bin/env node

const JWT = require("jsonwebtoken");
const yargs = require("yargs");

function main() {
  const argv = yargs
    .command("encode", "Encodes the provided string", {
      secret: {
        description: "The secret",
        type: "string",
        demandOption: true,
      },
    })
    .command("decode", "Decodes the provided string", {
      secret: {
        description: "The secret",
        type: "string",
        demandOption: true,
      },
    })
    .help()
    .alias("help", "h").argv;

  const secret = argv.secret;
  const action = argv._[0];
  const input = argv._[1];

  if (!input) {
    console.error("Error: Input is required.");
    return;
  }

  if (!secret) {
    console.error("Error: Secret is required.");
    return;
  }

  if (action === "encode") {
    console.log(JWT.sign(input, secret));
  } else if (action === "decode") {
    console.log(JWT.decode(input, secret));
  }
}

if (require.main === module) {
  main();
}
