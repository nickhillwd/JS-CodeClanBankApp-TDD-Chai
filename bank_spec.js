var bank = require('./bank.js');
var Account = require('./account.js');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('Bank', function(){
  it('should be able to have individual accounts', function(){
    expect(bank.accounts).to.exist;
  });
})

describe('Account', function(){
  // beforeEach(function(){
  //   console.log('setting up account1');
  //   var account1 = new Account("Nick", "Hill", "Personal");
  // });
  it('should have first name, last name, type, balance', function(){
    var account1 = new Account("Nick", "Hill", "Personal");
    expect(account1).to.have.all.keys(['holderFirst', 'holderLast', 'type', 'balance']);
  });
  it('should begin with a balance of £0', function(){
    var account1 = new Account("Nick", "Hill", "Personal");
    expect(account1).to.contain.keys({'balance':0})
  });
  it('should be able to add and account with 3 arguements', function(){
    Account.holderFirst = function(){};
    expect(Account).itself.to.respondTo('holderFirst');
    Account.holderLast = function(){};
    expect(Account).itself.to.respondTo('holderLast');
    Account.type = function(){};
    expect(Account).itself.to.respondTo('type');

  })
})
