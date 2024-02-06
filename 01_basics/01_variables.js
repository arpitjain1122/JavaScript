const accountId = 144553;

let accountEmail = "aj@gmail.com";

var accountPassword = "12345";
/*
prefer not to use var
because of issues in block scope and functional scope
*/

let accountState; // default value is undefined

accountCity = "Jaipur";

//this is a new way to print all variables at once.
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
