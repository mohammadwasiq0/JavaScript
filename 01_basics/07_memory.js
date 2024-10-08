// JS Memory
// Stack (Primitive), Heap (Non-Primitive)

let myEmail= "MOHAMMADWASIQ@gmail.com"

let anotherEmail= myEmail

anotherEmail= "mohammadwasiq@gmail.com"
console.log(myEmail);
console.log(anotherEmail);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

console.log(userOne);
console.log(userTwo);

userTwo.email="MOHAMMADWASIQ@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
