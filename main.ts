// One line, one laugh.
import { mkdirSync, writeFileSync } from "node:fs";

const laugh = "My smartwatch congratulated me on 10,000 steps today, every one of them spent looking for my phone.";

const chars = [...laugh].length;
if (chars < 1 || chars > 200) throw new Error(`line is ${chars} characters`);

const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(folder, { recursive: true });
writeFileSync(`${folder}/entry.txt`, laugh, "utf8");
