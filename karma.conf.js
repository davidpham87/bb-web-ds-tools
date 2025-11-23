module.exports = function (config) {
    config.set({
        browsers: ['ChromeHeadless'],
        frameworks: ['cljs-test'],
        files: [
            'target/test/js/test.js',
            {pattern: 'target/test/js/cljs-runtime/**/*.js', included: false, served: true, watched: true}
        ],
        proxies: {
            '/js/cljs-runtime/': '/base/target/test/js/cljs-runtime/'
        },
        client: {
            args: ["shadow.test.karma.init"],
            singleRun: true
        }
    })
};
