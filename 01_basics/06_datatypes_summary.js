// JS DataType Summary

// Primitive DataTypes ===>> 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non-Primitive) DataTypes ===>> 3 Types : Array, Objects, Functions


// Primitive DataTypes 
const score = 100
const scoreValue= 100.3

const isLoggedIn= false
const outSideTemp= null

let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId); // false

const bigNumber = 2232364526426532765372232n


// Reference (Non-Primitive) DataTypes

const fruits= ["apple", "mango", "guava", "grapes"]
let myobj = {
    name : "Wasiq",
    age : 24,
}

const myFunction= function(){
    console.log("Mohammad Wasiq");
}

console.log(typeof bigNumber); // bigint
console.log(typeof outSideTemp); //object
console.log(typeof scoreValue); //umber
console.log(typeof fruits); // object
console.log(typeof myobj); // object
console.log(typeof myFunction); // function
