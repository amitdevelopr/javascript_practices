const accountId = 144453;

let accountEmail = "amit@google.com";
var accountPassword = "12345";
accountCity = "jamshedpur";
let accountState;
// accountId = 2 //not allowed

accountEmail = "amit2@techamit.in";
accountPassword = "232323";
accountCity = "patna";

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*
prefer not to use var 
because it has issue with block scope and function scope.
*/
