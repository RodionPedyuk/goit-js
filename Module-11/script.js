"use strict";

// ----------------------------TASK 1--------------------------
// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548"
// ];

// const btnStart = document.querySelector("button[data-action='start']");
// const btnStop = document.querySelector("button[data-action='stop']");
// const body = document.querySelector("body");

// let BodyColorsInterval;

// btnStart.addEventListener("click", () => {
//   BodyColorsInterval = setInterval(() => {
//     const colorIndex = colors[randomIntegerFromInterval(0, colors.length)];
//     console.log(colorIndex);
//     document.body.style.backgroundColor = `${colorIndex}`;
//   }, 1000);
//   btnStart.disabled = true;
// });

// btnStop.addEventListener("click", () => {
//   clearInterval(BodyColorsInterval);
//   btnStart.disabled = false;
// });

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// ------------------------------------------------------------
// ----------------------------TASK 2.1--------------------------

// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.

// const delay = ms => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   });
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

// --------------------------------------------------------------
// ----------------------------TASK 2.2--------------------------

// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два параметра allUsers и userName и возвращала промис.

// const users = [
//   { name: "Mango", active: true },
//   { name: "Poly", active: false },
//   { name: "Ajax", active: true },
//   { name: "Lux", active: false }
// ];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );

//   return new Promise(resolve => {
//     resolve(updatedUsers);
//   });
// };

// const logger = updatedUsers => console.table(updatedUsers);

// /*
//  * Сейчас работает так
//  */
// // toggleUserState(users, "Mango", logger);
// // toggleUserState(users, "Lux", logger);

// /*
//  * Должно работать так
//  */
// toggleUserState(users, "Mango").then(logger);
// toggleUserState(users, "Lux").then(logger);

// --------------------------------------------------------------
// ----------------------------TASK 2.3--------------------------

// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = transaction => {
//   const delay = randomIntegerFromInterval(200, 500);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3;

//       if (canProcess) {
//         resolve([transaction.id, delay]);
//       } else {
//         reject(transaction.id);
//       }
//     }, delay);
//   });
// };

// const logSuccess = ([id, delay]) => {
//   console.log(`Transaction ${id} processed in ${delay}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// //  * Должно работать так
// //  */
// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);

// --------------------------------------------------------------
// ----------------------------TASK 3--------------------------

// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.

// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
let time = "";
const curDays = document.querySelector("[data-value=days]");
const curHours = document.querySelector("[data-value=hours]");
const curMins = document.querySelector("[data-value=mins]");
const curSec = document.querySelector("[data-value=secs]");

window.onload = () => {
  new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Jul 17, 2020")
  });

  console.log(new Date("Jul 17, 2020"));
  function CountdownTimer(e) {
    setInterval(() => {
      const time = e.targetDate - new Date();
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      curDays.innerText = days;
      curHours.innerText = hours;
      curMins.innerText = mins;
      curSec.innerText = secs;
    }, 1000);
  }
};
