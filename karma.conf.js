module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['cljs-test'],
    files: ['target/test/core.js']
  })
}
