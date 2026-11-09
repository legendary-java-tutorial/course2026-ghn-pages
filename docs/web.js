import { hint } from "./game.js";
const c = (await (await fetch("./game.json")).json());
document.querySelector("#greeting").textContent = c.greeting + " " + hint(50, 10);
