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
        log.error(`${platform} is not a valid platform for this command`);
        return;
    }

    platforms[platform](platform, callback);
};
