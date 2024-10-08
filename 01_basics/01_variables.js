const accountID = 144553
let accountEmail = "wasiq@google.com"
var accountPassword = "12345"
accountCity = "Amroha"

let accountState;

// accountID = 2 // not allowed
console.log(accountID);

/*
Prefer not to use var 
because of issue in block scope and functional scope  
*/

accountEmail= "mw@google.com"
accountPassword= "423324242"
accountCity= "Joya"

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])