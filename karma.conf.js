module.exports = function (config) {
    config.set({
        browsers: ['ChromeHeadlessNoSandbox'],
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },
        frameworks: ['cljs-test'],
        files: [
            'target/test/libs.js',
            'target/test/js/test.js',
            {pattern: 'target/test/js/cljs-runtime/**/*.js', included: false, served: true, watched: true},
            {pattern: 'target/test/*.wasm', included: false, served: true, watched: true}
        ],
        proxies: {
            '/js/cljs-runtime/': '/base/target/test/js/cljs-runtime/',
            '/base/target/test/js/cljs-runtime/sqlite3.wasm': '/base/target/test/sqlite3.wasm'
        },
        client: {
            args: ["shadow.test.karma.init"],
            singleRun: true
        }
    })
};
