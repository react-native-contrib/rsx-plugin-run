'use strict';

const utils = require('rsx-common');
const chai = require('chai');
const rewire = require('rewire');
const sinon = require('sinon');
const path = require('path');

const expect = chai.expect;
const log = utils.log;

const command = require('../src/run');

log.level = 'silent';

describe('run', () => {

    it('should do something');


    describe('main', () => {

        it('should throw an error if an invalid platform is specified', () => {
            const spy = sinon.spy();
            const command = require('../src/run');
            command(['pppppp'], spy);
            expect(spy.calledWith('pppppp is not a valid platform for this command'));
        });

        it('should execute the subcommand if a valid platform is specified', () => {
            const spy = sinon.spy();
            const command = require('../src/run');
            command(['ios'], spy);

            expect(spy.calledOnce).to.deep.equals(true);
        });

    });

    describe('ios', () => {

        it('should run on iOS');

    });

    describe('android', () => {

        it('should run on Android');

    });

});
