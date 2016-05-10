'use strict';

const utils = require('rsx-common');
const log = utils.log;

module.exports = function run(callback) {
    log.heading = 'rsx-run ios';
    utils.process.run('react-native run-ios')(callback);
};
