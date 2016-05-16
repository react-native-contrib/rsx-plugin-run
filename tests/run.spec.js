'use strict';

let utils = require('rsx-common');
let chai = require('chai');
let rewire = require('rewire');
let sinon = require('sinon');
let path = require('path');

let expect = chai.expect;
let log = utils.log;

let command = require('../src/run');

log.level = 'silent';

describe('run', () => {

    it('should do something');


    describe('main', () => {

        it('should throw an error if an invalid platform is specified', () => {
            let spy = sinon.spy();
            let command = require('../src/run');
            command(['pppppp'], spy);
            expect(spy.calledWith('pppppp is not a valid platform for this command'));
        });

        it('should execute the subcommand if a valid platform is specified', () => {
            let commandMock = rewire('../src/run');
            commandMock.__set__('platforms', {
                ios: (callback) => { callback(); },
                android: (callback) => { callback(); },
            });
            let spy = sinon.spy();
            commandMock(['ios'], spy);

            expect(spy.calledOnce).to.deep.equals(true);
        });

    });

    describe('ios', () => {

        it('should run on iOS', () => {
            let commandMock = rewire('../src/ios/run');
            commandMock.__set__('utils', {
                process: {
                    run: function run(command) { return (callback) => callback(command); },
                },
            });
            let spy = sinon.spy();
            commandMock(spy);

            expect(spy.calledOnce).to.deep.equals(true);
        });

    });

    describe('android', () => {

        it('should run on Android', () => {
            let commandMock = rewire('../src/android/run');
            commandMock.__set__('utils', {
                process: {
                    run: function run(command) { return (callback) => callback(command); },
                },
            });
            let spy = sinon.spy();
            commandMock(spy);

            expect(spy.calledOnce).to.deep.equals(true);
        });

    });

});
