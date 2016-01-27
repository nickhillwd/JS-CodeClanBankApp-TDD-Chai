var bank = require('./bank.js');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('Bank', function(){
  it('should be able to have individual accounts', function(){
    expect(bank.accounts).to.exist;
  })
})