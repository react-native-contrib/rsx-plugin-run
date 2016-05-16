'use strict';

let utils = require('rsx-common');

let log = utils.log;

let platforms = {
    'ios': require('./ios/run'),
    'android': require('./android/run'),
};

module.exports = function run(args, callback) {
    log.heading = 'rsx-run';
    let platform = args[0];
    let onEnd = callback || (() => {});

    if (Object.keys(platforms).indexOf(platform) === -1) {

        try {
            throw Error(`${platform} is not a valid platform for this command`);
        } catch(e) {
            log.error(e.message);
        }

        return;
    }

    platforms[platform](onEnd);
};
