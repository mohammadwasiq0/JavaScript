// JS Date and Time

let myDate = new Date()
console.log(myDate); // 2024-10-09T14:11:23.150Z
console.log(myDate.toString()); // Wed Oct 09 2024 14:13:24 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Wed Oct 09 2024
console.log(myDate.toLocaleDateString()); // 10/9/2024
console.log(typeof myDate); // object

let myCreateDate = new Date(2024, 10, 09)
console.log(myCreateDate.toDateString); // [Function: toDateString]


let myCreateDate1 = new Date(2024, 10, 09, 5, 3)
console.log(myCreateDate1.toLocaleString()); // 11/9/2024, 5:03:00 AM

let myCreateDate2 = new Date("2024-10-09")
console.log(myCreateDate2.toLocaleString()); // 10/9/2024, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1728483486891

console.log(myCreateDate2.getTime()); // 1728432000000

let newDate= new Date()
console.log(newDate); // 2024-10-09T14:21:14.362Z
console.log(newDate.getDate()); // 9
console.log(newDate.getMonth); // [Function: getMonth]
console.log(newDate.getDay); // [Function: getDay]

console.log(newDate.toLocaleString('default', {
    weekday: 'long'
})) // Wednesday










