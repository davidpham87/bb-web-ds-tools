module.exports = function (config) {
    config.set({
        browsers: ['ChromeHeadless'],
        frameworks: ['cljs-test'],
        files: ['target/test/core.js'],
        client: {
            args: ["shadow.test.karma.init"],
            singleRun: true
        }
    })
};
