import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const content = fs.readFileSync(path.join(root, "onfit_getfit.jsx"), "utf8");

const logoMatch = content.match(/const LOGO = "data:image\/jpeg;base64,([^"]+)"/);
if (!logoMatch) throw new Error("no logo");
fs.mkdirSync(path.join(root, "public"), { recursive: true });
const logoBuf = Buffer.from(logoMatch[1], "base64");
fs.writeFileSync(path.join(root, "public", "logo.png"), logoBuf);

const start = content.indexOf("<style>{`") + 9;
const end = content.indexOf("`}</style>");
if (start < 9 || end < 0) throw new Error("no style block");
let css = content.slice(start, end);
const lines = css.split("\n");
css = lines.slice(1).join("\n").replace("body,#root", "body");

const vars = `:root {
  --bg: #0A0A0A;
  --bg1: #111;
  --bg2: #141414;
  --g9: #1E1E1E;
  --g8: #2A2A2A;
  --g7: #3A3A3A;
  --g6: #555;
  --g5: #777;
  --g4: #999;
  --g3: #BBB;
  --wh: #F5F5F0;
  --lm: #C8F731;
  --ld: #A8D426;
  --ll: #D4FF4A;
  --lg: rgba(200, 247, 49, 0.15);
  --lgm: rgba(200, 247, 49, 0.25);
  --lgl: rgba(200, 247, 49, 0.4);
  --fd: var(--font-bebas), "Impact", sans-serif;
  --fb: var(--font-barlow), "Helvetica Neue", sans-serif;
  --eo: cubic-bezier(0.16, 1, 0.3, 1);
  --gb: rgba(10, 10, 10, 0.85);
  --gbl: 20px;
}
`;

fs.mkdirSync(path.join(root, "src", "styles"), { recursive: true });
fs.mkdirSync(path.join(root, "src", "app"), { recursive: true });
fs.writeFileSync(path.join(root, "src", "styles", "variables.css"), vars.trim() + "\n");
fs.writeFileSync(
  path.join(root, "src", "app", "globals.css"),
  '@import "../styles/variables.css";\n\n' + css.trim() + "\n"
);

console.log("logo bytes:", logoBuf.length);
