const fs = require('fs');
const path = require('path');

const filePath = path.join('node_modules', '@sqlite.org/sqlite-wasm/sqlite-wasm/jswasm/sqlite3.mjs');

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8');
  const search = "Module['locateFile'] =";
  const replace = "if (!Module['locateFile']) Module['locateFile'] =";

  if (content.includes(search) && !content.includes(replace)) {
    content = content.replace(search, replace);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Patched sqlite3.mjs');
  } else {
    console.log('sqlite3.mjs already patched or search pattern not found');
  }
} else {
  // Silent or warn, but don't fail as it might be a different environment or install phase
  console.warn('sqlite3.mjs not found at', filePath);
}
