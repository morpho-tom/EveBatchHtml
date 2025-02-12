// // Variable Declaration and Assignment
// let a = 10; // Declare 'a' once
// let b = 20;
// let c = 40;

// // Arithmetic Operators
// a = a + 10; // Update 'a' without redeclaring
// a += 10; // Shorthand for addition
// console.log("Updated a:", a);

// // Example Operations
// let sum = a + b;
// let difference = b - a;
// let product = a * b;
// let quotient = c / a;
// let remainder = c % a;
// console.log("Sum:", sum);
// console.log("Difference:", difference);
// console.log("Product:", product);
// console.log("Quotient:", quotient);
// console.log("Remainder:", remainder);

// // Comparison Operators
// console.log("a > b:", a > b);
// console.log("a <= b:", a <= b);

// // Logical Operators
// let isActive = true;
// let isAvailable = false;
// console.log("isActive AND isAvailable:", isActive && isAvailable);
// console.log("isActive OR isAvailable:", isActive || isAvailable);
// console.log("NOT isActive:", !isActive);

//     // <!-- Conditional Statements -->

// Simple If-Else Statement
// const age = 17;
// if (age >= 18) {
//     console.log("You are eligible to vote.");
// } else {
//     console.log("You are not eligible to vote.");
// }

// // Else-If Ladder
// let score = 85;
// let grade;
// if (score >= 90) {
//     grade = "A";
// } else if (score >= 80) {
//     grade = "B";
// } else if (score >= 70) {
//     grade = "C";
// } else {
//     grade = "F";
// }
// console.log("Grade:", grade);

// // Switch Case
// const day = 3;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// Ternary Operator
// const age = 18
// const isAdult = age >= 18 ? "Adult" : "Minor";
// console.log(isAdult);

//     // <!-- Functions and Loops -->

// // Simple Function
// function greet(name) {
//     return `Hello, ${name}`;
// }
// console.log(greet("Alice"));

// // Arrow Function
// const add = (a, b) => a + b;
// console.log(add(5, 3));

// // Recursive Function
// function factorial(n) {
//     if (n === 0) return 1;
//     return n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120

// // For Loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// // While Loop
// let count = 0;
// while (count < 5) {
//     console.log(count);
//     count++;
// }

// // Do-While Loop
// let index = 0;
// do {
//     console.log(index);
//     index++;
// } while (index < 5);

// // For-Of Loop
// let arr = ["a", "b", "c"];
// for (let item of arr) {
//     console.log(item);
// }

// // For-In Loop
// let obj = { name: "Alice", age: 25 };
// for (let key in obj) {
//     console.log(`${key}: ${obj[key]}`);
// }

// // Nested Loops
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }

//     // Math Methods

// // Rounding
// console.log(Math.round(5.8)); // 6
// console.log(Math.floor(5.8)); // 5
// console.log(Math.ceil(5.1)); // 6

// // Square Root
// console.log(Math.sqrt(16)); // 4

// // Absolute Value
// console.log(Math.abs(-10)); // 10

// // Power
// console.log(Math.pow(2, 3)); // 8

// // Min and Max
// console.log(Math.min(1, 5, 3)); // 1
// console.log(Math.max(1, 5, 3)); // 5

// // Random Numbers
// console.log(Math.random()); // Between 0 and 1
// console.log(Math.floor(Math.random() * 6) + 1); // Dice Roll

// // arrow function example
// const age = 25

// const checkAge = age >= 18 ? (age >= 21 ? "you are ready to married" : "you are not ready to married") : "minor"
// console.log(checkAge);

// //array examples

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
// numbers.pop() // remove last element
// numbers.push(7) // add element at the end

// numbers.shift() // remove first element

// numbers.unshift(1) // add element at the beginning

// numbers.splice(2, 1, 9) // remove 1 element at index 2

// delete numbers[2] // remove element at index 2

//  let sliceValue = numbers.slice(2,4) // return elements from index 2 to 4

// let concatValue = num1.concat(num2) // merge two arrays

// console.log(concatValue);

// //object examples

// const user = {
//     firstName :"achappan",
//     password : "1234",
//     age : 25,
//     email: 'abcd@gmail.com'
// }
// console.log(user);

// // object examples
// const user = {
//     firstName: "achappan",
//     password: "1234",
//     age: 25,
//     email: 'abcd@gmail.com',
//     assert: {
//       bike: 're',
//       car: 'tata',
//       cycle: "hero"
//     },
//     value: [1, 2, 3, 4, 5],
//     buy: function () {
//       console.log("buying");
//     },
//     sell() {
//       console.log("selling");
//     }
//   }

//   const newobj = new Object
//   newobj.name = "kannan"

//   console.log(user.sell());

// //Loops
// console.log('hello')
// console.log('hello')
// console.log('hello')
// console.log('hello')
// console.log('hello')

//for, while, do-while

// for (let i = 1; i <= 10; i++) {
//  if (i % 2 == 0){
//   break
//  }
//  console.log(i)
// }

// let i = 1

// while (i<= 10 ){
//   console.log(i)
//   i++
// }
// console.log("do wlile");

// do {
//   console.log(i)
//   i++
// }while (i <= 10 )

// const carNames = ["bmw", "audi", "benz", "tata"];

// for (let car of carNames) {
//   console.log(car);
// }

// const obj = {
//   name: "achappan",
//   age: "27",
//   email: "abcd@gmail.com",
// };

// for ( const user in obj){
//   console.log(user ,':',obj[user])
// }

// function add(a, b) {
//   return a + b;
// }
// console.log(add(5,2))

let fun = function (a, b) {
  return a + b;
};

console.log(fun(3, 6));

 const sub = (a,b) => {
return a-b
 }
console.log(sub(5,2))
//  sub(5,18)
