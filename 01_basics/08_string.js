// JS String

const gitUser= "mohammadwasiq0 "
const repoCount = 57

console.log(gitUser + repoCount + " Value");
console.log(`Hello my github user name name is ${gitUser} and my repo count is ${repoCount}`);

const gameName = new String("newgame")
console.log(gameName[0]); //n

// console.log(gameName.__proto__);

console.log(gameName.length); // 7
console.log(gameName.toUpperCase()); // NEWGAME
console.log(gameName.charAt(2)); // w
console.log(gameName.indexOf('a')); // 4
console.log(gameName.indexOf('e')); // 1

const newString = gameName.substring(0, 4)
console.log(newString); // newg

const anotherString = gameName.slice(-6, 4)
console.log(anotherString); // ewg

const newStringOne = "  wasiq   "
console.log(newStringOne); // "  wasiq   "

console.log(newStringOne.trim()); // "wasiq"

const url= "https://github.com/mohammad%20wasiq0"

console.log(url.replace('%20', '')); // "https://github.com/mohammadwasiq0"

console.log(url.includes('wasiq', '')); //true

const name= "My name is Mohammad Wasiq"
console.log(name.split(' ')); // [ 'My', 'name', 'is', 'Mohammad', 'Wasiq' ]