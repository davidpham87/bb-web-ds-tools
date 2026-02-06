module.exports = function(source) {
  const search = "return new URL(path, import.meta.url).href;";
  const replace = `
      if (path === "sqlite3.wasm") {
        return new URL("sqlite3.wasm", import.meta.url).href;
      }
      return new URL(path, import.meta.url).href;
  `;
  return source.replace(search, replace);
};
