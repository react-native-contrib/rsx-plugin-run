const utils = require('rsx-common');
const log = utils.log;

module.exports = function run(platform, callback) {
    log.heading = 'rsx-run ios';
    utils.process.run(`react-native run-${platform}`)(() => {
        if (callback) { callback(); }
    });
};
