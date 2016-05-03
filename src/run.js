const utils = require('rsx-common');
const path = require('path');
const android = require('./android');
const ios = require('./ios');
const log = utils.log;

const appRoot = process.env['RN_PROJECT_ROOT'];

const platforms = [
  'ios',
  'android',
];

module.exports = function run(args, callback) {
  log.heading = 'rsx-run';
  const platform = args[0];

  if (platforms.indexOf(platform) !== -1) {

    switch(platform) {
      case 'android':
        android();
        break;
      case 'ios':
      default:
        ios();
        break;
    }

    return;

  }

  log.error(action + ' is not a valid platform for this command');

};
