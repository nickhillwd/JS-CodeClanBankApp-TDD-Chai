var bank = require('./bank.js');
var Account = require('./account.js');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('Bank', function(){
  beforeEach(function(){
    console.log("Removing all created accounts");
    bank.accounts = [];
  })
  it('should be able to have individual accounts', function(){
    expect(bank.accounts).to.exist;
  });
  it('should start with 0 accounts', function(){
    expect(bank.accounts).to.be.empty;
  });
  it('should be able to add a new account to the array when a new account is crerated', function(){
    var account1 = new Account("Nick", "Hill", "Personal");
    console.log(bank.accounts)
    expect(bank.accounts[0]).to.be.an('object');
    expect(bank.accounts.length).to.eql(1);
  });
  it("should be able to find an account by holder's First name", function(){
    var account1 = new Account("Nick", "Hill", "Personal");
    var account2 = new Account("Keith", "Douglas", "Personal");
    var account3 = new Account("Jay", "ChittyChatty", "Business");
    bank.findByName("Nick")
    expect(account.holderFirst).to.eql('nick');
  });
  it("should be able to find an account by holder's Last name", function(){
    var account1 = new Account("Nick", "Hill", "Personal");
    var account2 = new Account("Keith", "Douglas", "Personal");
    var account3 = new Account("Jay", "ChittyChatty", "Business");
    bank.findByName("ChittyChatty")
    expect(account.holderLast).to.eql('chittychatty');
  });
  it("should be able to find an account by the largest amount", function(){

  })
})

describe('Account', function(){
  beforeEach(function(){
    console.log('setting up account1');
    account1 = new Account("Nick", "Hill", "Personal");
  });
  it('should have first name, last name, type, balance', function(){
    expect(account1).to.have.all.keys(['holderFirst', 'holderLast', 'type', 'balance']);
  });
  it('should begin with a balance of £0', function(){
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
  it("should be able to have funds added to an account", function(){
    account1.makeDeposit("10");
    expect(account1.balance).to.eql(10);
  })
})
