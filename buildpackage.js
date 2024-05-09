/**
 * This is solely a build script, intended to prep the azure-devops-extension-api npm package for publishing.
 */

import { execSync } from "child_process";
import glob from "glob";
import path from "path";
import shell from "shelljs";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Clean bin directory
console.log("# Cleaning lib. Running shelljs rm -rf ./lib");
shell.rm("-rf", "./bin");

// Compile typescript
console.log("# Compiling TypeScript. Executing `node_modules/.bin/tsc -p ./tsconfig.json`.");
try {
    execSync("node_modules/.bin/tsc -p ./tsconfig.json", {
        stdio: [0, 1, 2],
        shell: true,
        cwd: __dirname,
    });
} catch (error) {
    console.log("ERROR: Failed to build TypeScript.", error);
    process.exit(1);
}

// Copy ts files to bin
console.log("# Copy declare files to lib.");
try {
    const declarationFiles = glob.sync("src/**/*.d.ts");
    for (const src of declarationFiles) {
        const dest = src.replace("src/", "lib/");
        shell.mkdir("-p", path.dirname(dest));
        shell.cp(src, dest);
    }
} catch (e) {
    console.error("Copy failed. ", e);
}