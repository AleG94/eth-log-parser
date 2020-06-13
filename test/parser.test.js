'use strict';
const chai = require('chai');
const parser = require('../lib/parser');
const abi = require('./fixtures/abi.json');
const unparsedLog = require('./fixtures/unparsed-log.json');
const parsedLog = require('./fixtures/parsed-log.json');
const unknownLog = require('./fixtures/unknown-log.json');

chai.should();

describe('Parser', () => {
  it('should parse event logs', () => {
    const output = parser.parse(unparsedLog, abi);
    output.should.be.deep.equal(parsedLog);
  });

  it('should throw an error when parsing an unknown event log', () => {
    const fn = () => parser.parse(unknownLog, abi);
    fn.should.throw('Cannot parse unknown event');
  });
});
