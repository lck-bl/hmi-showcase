import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const cssDir = join(process.cwd(), ".next", "static", "css");
const publicDir = join(process.cwd(), "public");
const fallbackPath = join(publicDir, "fallback.css");

if (!existsSync(cssDir)) {
  throw new Error(`CSS output directory not found: ${cssDir}`);
}

const cssFiles = readdirSync(cssDir)
  .filter((file) => file.endsWith(".css"))
  .map((file) => {
    const path = join(cssDir, file);
    return { path, size: statSync(path).size };
  })
  .sort((a, b) => b.size - a.size);

if (cssFiles.length === 0) {
  throw new Error(`No CSS files found in: ${cssDir}`);
}

mkdirSync(publicDir, { recursive: true });
copyFileSync(cssFiles[0].path, fallbackPath);
console.log(`Synced ${cssFiles[0].path} -> ${fallbackPath}`);
