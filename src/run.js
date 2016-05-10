'use strict';

const utils = require('rsx-common');
const log = utils.log;

const platforms = {
    'ios': require('./ios/run'),
    'android': require('./android/run'),
};

module.exports = function run(args, callback) {
    log.heading = 'rsx-run';
    const platform = args[0];

    if (Object.keys(platforms).indexOf(platform) === -1) {

        try {
            throw Error(`${platform} is not a valid platform for this command`);
        } catch(e) {
            log.error(e.message);
        }

        return;
    }

    platforms[platform](callback);
};
