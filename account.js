var bank = require('./bank.js');

var Account = function(holderFirst, holderLast, type){
  this.holderFirst = holderFirst;
  this.holderLast = holderLast;
  this.type = type;
  this.balance = 0;

  bank.newAccount(this);
}

// Account.prototype = {
//   new: function(){

//   }
// }

module.exports = Account;