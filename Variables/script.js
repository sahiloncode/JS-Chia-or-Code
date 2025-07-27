const accountId =101;
let accountName = "Hayate";
var accountPassword = "12345";
accountCity = "Tokyo";

// accountId = "103"; we cannot reassign a constant variable
console.log(accountId);
 accountName = "Luffy";
console.log(accountName);
accountPassword = "67890";
console.log(accountPassword);
accountCity = "Osaka";  
console.log(accountCity);

console.table([accountName, accountPassword, accountCity]);