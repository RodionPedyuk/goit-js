"use strict";

// --------------TASK 1------------------

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = "happy";
// user.hobby = "Javascript";
// user.premium = false;

// for (let obj of Object.keys(user)) {
//   console.log(`${obj}`, ":", user[obj]);
// }

// --------------------------------------
// --------------TASK 2------------------

// const countProps = function(obj) {
//   return Object.keys(obj).length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// --------------------------------------
// --------------TASK 3------------------

// const findBestEmployee = function(stats) {
//   let bestWorker = 0;
//   let name;

//   const employees = Object.keys(stats);

//   for (const employee of employees) {
//     if (bestWorker < stats[employee]) {
//       bestWorker = stats[employee];
//       name = employee;
//     }
//   }
//   return {
//     name,
//     taskComplete: bestWorker
//   };
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38
//   })
// ); // lux

// --------------------------------------
// --------------TASK 4------------------

// let result = 0;
// const employees = {
//   kiwi: 200,
//   lux: 50,
//   chelsy: 150
// };

// const countTotalSalary = function(employees) {
//   for (let amount of Object.keys(employees)) {
//     result += employees[amount];
//   }
//   console.log(result);
// };

// countTotalSalary(employees);

// --------------------------------------
// --------------TASK 5------------------

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// const getAllPropValues = function(arr, prop) {
//   const values = [];
//   for (let product of products) {
//     if (prop in product) {
//       values.push(product[prop]);
//     }
//   }
//   return values;
// };

// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

// --------------------------------------
// --------------TASK 6------------------

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// const calculateTotalPrice = function(arr, productName) {
//   let values = 0;
//   for (const { name, price, quantity } of arr) {
//     if (productName === name) {
//       values = price * quantity;
//     }
//   }
//   return values;
// };

// console.log(calculateTotalPrice(products, "Радар")); // 5200

