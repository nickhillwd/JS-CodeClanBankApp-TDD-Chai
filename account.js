var bank = require('./bank.js');

var Account = function(holderFirst, holderLast, type){
  this.holderFirst = holderFirst.toLowerCase();
  this.holderLast = holderLast.toLowerCase();
  this.type = type;
  this.balance = 0;

  bank.newAccount(this);
}

Account.prototype = {
  makeDeposit: function(amount){
    this.balance += parseInt(amount);
  }
}

module.exports = Account;