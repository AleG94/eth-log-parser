'use strict';
const chai = require('chai');
const parser = require('../lib/parser');
const parseLog = require('..');

chai.should();

describe('External API', () => {
  it('should expose parse function', () => {
    parseLog.should.be.equal(parser.parse);
  });
});
