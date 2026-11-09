import { test } from "node:test"; import assert from "node:assert/strict";
import { hint } from "../src/game.ts";
test("hint", () => assert.equal(hint(50, 10), "больше"));
