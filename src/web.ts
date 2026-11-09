import { hint, type Config } from "./game.js";
const c = (await (await fetch("./game.json")).json()) as Config;
document.querySelector("#greeting")!.textContent = c.greeting + " " + hint(50, 10);
