import { readFileSync } from "node:fs";
import { hint } from "./game.js";
const c = JSON.parse(readFileSync(new URL("./game.json", import.meta.url), "utf8"));
console.log(c.greeting, `(${c.min}–${c.max})`);
console.log("hint(50,10):", hint(50, 10));
