const fs = require('fs');
const path = 'docs/js/libs/webr/webr.mjs';

try {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    const lines = content.split('\n');
    // Check if file needs patching (starts with node imports)
    if (lines[0].includes("import { createRequire }")) {
      console.log("Patching webr.mjs to remove Node.js imports...");
      // Remove lines until we find the start of the browser code (e.g. var fr=...) or just fixed 6 lines
      // The file structure is consistent for this version.
      const newContent = lines.slice(6).join('\n');
      fs.writeFileSync(path, newContent);
      console.log("Successfully patched webr.mjs");
    } else {
      console.log("webr.mjs already patched or different format.");
    }
  } else {
    console.error("File not found: " + path);
    process.exit(1);
  }
} catch (e) {
  console.error("Error patching webr.mjs:", e);
  process.exit(1);
}
