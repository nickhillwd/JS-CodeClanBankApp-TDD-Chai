var bank = require('./bank.js');
var Account = require('./account.js');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('Bank', function(){
  it('should be able to have individual accounts', function(){
    expect(bank.accounts).to.exist;
  })
})

describe('Account', function(){
  it('should have first name, last name, type, balance', function(){
    var account1 = new Account("Nick", "Hill", "Personal")
    expect(account1).to.have.all.keys(['holderFirst', 'holderLast', 'type', 'balance']);
  })
})