// // ES6, also known as ECMAScript 2015
// //! 1) Arrow function 
// //?Treditional function
// function add(a, b) {
//     return a + b;
// }
// console.log(add(3, 5));

// // Arrow function 
// const add1 = (a, b) => a + b;
// // console.log(`the Total: ${add1(3, 5)}`);

// //! 2) Let and const
// // let name= "prabhat"
// const lname = "kumar"

// //! 3)Template Literals
// // console.log(`This is a template literal`);

// //! 4)Destructuring
// const numbers = [1, 2, 3];
// const [first, second, third] = numbers;
// console.log(first)

// const person = { name: "Bob", age: 30 };
// const { name, age } = person;
// // console.log(name);

// //!5)Spread Operator:
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2]; // Concatenation using spread
// // console.log(combined)

// const originalObj = { x: 1, y: 2 };
// const newObj = { ...originalObj }; // Object cloning
// // console.log(newObj)

// //!6) Classes
// class Persons {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// //!7)Default Parameters
// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
// }

// //!8) Module 
// // Exporting module
// export function add(a, b) {
//     return a + b;
// }

// // Importing module
// import { add } from "./math";




let x = 0;

parent.addEventListener('click', () => x++); child.addEventListener('click', () => { event.preventDefault();

x++;

});