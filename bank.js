var bank = {
  accounts: [],
  newAccount: function(account){
    this.accounts.push(account);
  },
  findByName: function(nameSearch){
    name = nameSearch.toLowerCase();
    for(account of this.accounts){
      account.holderFirst === name ? account : account.holderLast === name ? account : "No Match";
      // if(account.holderFirst === name){
      //   return account;
      // }else if(account.holderLast === name){
      //   return account;
      // }else{
      //   return "No Match"
      // }
    }
  }
}


module.exports = bank;