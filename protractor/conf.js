exports.config = {
    // directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions' : {
            args: ['--lang=en',
                '--window-size=1800,600']
        }
        
    },

    framework: 'jasmine',

    specs: ['spec.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
