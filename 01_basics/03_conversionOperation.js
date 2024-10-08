let score = "33"

console.log(typeof score);
console.log(typeof(score));

let ValueInNumber= Number(score)
console.log(typeof(ValueInNumber));

let score1 = "33abd"

let ValueInNumber1= Number(score1)
console.log(typeof(ValueInNumber1));
console.log(ValueInNumber1);

let score2 = null

let ValueInNumber2= Number(score2)
console.log(typeof(ValueInNumber2));
console.log(ValueInNumber2);

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let IsLoggedIn= 1

let booleanIsLoggedIn= Boolean(IsLoggedIn)
console.log(typeof(booleanIsLoggedIn));
console.log(booleanIsLoggedIn);


let IsLoggedIn1= ""

let booleanIsLoggedIn1= Boolean(IsLoggedIn1)
console.log(typeof(booleanIsLoggedIn1));
console.log(booleanIsLoggedIn1);

let IsLoggedIn2= "wasiq"

let booleanIsLoggedIn2= Boolean(IsLoggedIn2)
console.log(typeof(booleanIsLoggedIn2));
console.log(booleanIsLoggedIn2);

// 1 => true; 0 => false
// "" => false
// "wasiq" => true

let SomeNumber = 33

let StringNumber = String(SomeNumber)
console.log(StringNumber);
console.log(typeof StringNumber);
