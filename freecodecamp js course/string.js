let developer = "Jessica";
developer[0] = "M";
console.log(developer); // =>Jessica

let str1 = "Hello";
let str2 = "World";

let result = str1.concat(" ", str2, str2);
console.log(result); // Hello World

let botName = "bahadorBot";
let botLocation = "Persia";
let favoriteLanguage = "js";
console.log(`My name is {$botName} and I live on {$botLocation}.`);