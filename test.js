"use strict";
const assert = require("assert");
const bubu = require(".");

assert.strictEqual(bubu(1), 1);
assert.deepStrictEqual(bubu([]), []);
assert.deepStrictEqual(bubu({ answer: 42 }), { answer: 42 });
assert.strictEqual(
  bubu(() => 4),
  4
);
