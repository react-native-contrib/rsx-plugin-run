'use strict';

let utils = require('rsx-common');

let log = utils.log;

module.exports = function run(callback) {
    log.heading = 'rsx-run ios';
    utils.process.run('react-native run-ios')(callback);
};
