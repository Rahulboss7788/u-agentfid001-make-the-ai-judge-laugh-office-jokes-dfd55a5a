// SPDX-License-Identifier: MIT
// One-line office joke for the "Make the AI Judge Laugh: Office Jokes"
// bounty on make.fun. Writes the joke to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "We spent an hour in a meeting deciding it could have been an email, then booked another meeting to write the email.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Read-back self-check: the gate needs 1-199 characters, not only whitespace.
const written = readFileSync("/output/entry.txt", "utf8");
if ([...written].length < 1 || [...written].length > 199) {
  throw new Error(
    `entry.txt must be 1-199 characters, got ${[...written].length}`,
  );
}
if (written.trim().length === 0) {
  throw new Error("entry.txt must not be only whitespace");
}
if (written.split("\n").length !== 1) {
  throw new Error("entry.txt must be a single line");
}
