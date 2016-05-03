const spawnSync = require('child_process').spawnSync;
const utils = require('rsx-common');
const log = utils.log;
const spawnOpts = {
    stdio: 'inherit',
    stdin: 'inherit',
};

module.exports = function install(args, callback) {
    log.heading = 'rsx-run android';

    var res = spawnSync('react-native', ['run-android'], spawnOpts);

    if (res.status) {
        process.exit(res.status);
    }
};
