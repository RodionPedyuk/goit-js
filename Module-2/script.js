"use strict";

// --------------TASK 1------------------

// const logItems = function(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(array[i], "-", i + 1);
//   }
// };

// const names = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// const number = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// logItems(names);
// logItems(number);

// ---------------------------------------

// --------------TASK 2------------------

// let userInput = prompt("Введите слова для гравировки...");
// let pricePerWord = 20;
// let arrLenght = userInput.split(" ").length;

// const calculateEngravingPrice = function(arrLenght) {
//   const result = arrLenght * pricePerWord;
//   console.log(result);
//   alert(`Ваша стоимость гравировки  ${result} кредитов`);
// };

// calculateEngravingPrice(arrLenght);

// ---------------------------------------

// --------------TASK 3------------------

// let string = prompt("Введите слова...");

// const words = string.split(" ");
// console.log(words);

// let longestWord = words[0];

// for (const word of words) {
//   if (word.length > longestWord.length) {
//     longestWord = word;
//   }
// }

// console.log(longestWord);

// ---------------------------------------

// --------------TASK 4------------------

// let message = prompt("Введите слова...");

// const formatString = function(letter) {
//   if (letter.length > 40) {
//     console.log(`${letter.slice(0, 40)}...`);
//   } else console.log(letter);
// };
// formatString(message);

// ---------------------------------------

// --------------TASK 5------------------

// let str = prompt("Enter your sentence...").toLowerCase();

// const checkForSpam = function(str) {
//   if (str.indexOf("sale") >= 0 || str.indexOf("spam") >= 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// checkForSpam(str);

// ---------------------------------------

// --------------TASK 6------------------

// let input = 0;
// const numbers = [];
// let total = 0;
// do {
//   input = prompt("Введите числа и нажмите кнопку cancel...");
//   if (isNaN(input)) {
//     alert("Вводи только цифры!");
//     continue;
//   } else {
//     numbers.push(Number(input));
//   }
// } while (input !== null);

// for (let num of numbers) {
//   total += num;
// }
// alert(`Общая сумма чисел равна ${total}`);

