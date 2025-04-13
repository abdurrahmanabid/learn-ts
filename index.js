"use strict";
//! Function 
// function multiply(a : number,b : number){
//     return a * b;
// }
// console.log(multiply(39,3)); 
//! array 
// let arr = ['banana', 'apple', 'orange'];
// arr.push(32); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
//! object
// let obj = {
//     name: 'John',
//     age: 30,
//     isStudent: false
// };
// obj.age = 'thirty'; // Error: Type 'string' is not assignable to type 'number'.
//! Explicitly variables
// let myName:string ;
// myName = 'John'; // Correct
// // myName = 123; // Error: Type 'number' is not assignable to type 'string'.
// console.log(myName);  
//! Explicitly Objects
let person = {
    name: 'John',
    age: 30,
    isStudent: false
};
// person.age = 'thirty'; // Error: Type 'string' is not assignable to type 'number'.
console.log(person);
