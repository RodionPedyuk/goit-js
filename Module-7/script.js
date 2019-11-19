"use strict";

// -------------------TASK 1-----------------

// Категория: Животные
// Количество элементов: 4

// const categoriesFind = document.querySelectorAll(".item");
// console.log(categoriesFind);
// console.log(`В списке ${categoriesFind.length} категории.`);
// categoriesFind.forEach(item => {
//   item.querySelector("h2").textContent;
//   item.querySelectorAll("ul, li").length;
//   console.log(`Категория : ${item.querySelector("h2").textContent}`);
//   console.log(`Количество : ${item.querySelectorAll("li").length}`);
// });

// ------------------------------------------
// -------------------TASK 2-----------------

// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы"
// ];

// const ingredientsList = document.querySelector("#ingredients");

// const fragment = document.createDocumentFragment();
// ingredients.forEach(item => {
//   const createElem = document.createElement("li");

//   createElem.textContent = item;
//   fragment.append(createElem);
// });

// ingredientsList.appendChild(fragment);

// ------------------------------------------
// -------------------TASK 3-----------------

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running"
//   }
// ];

// const galeryImages = document.querySelector("#gallery");
// galeryImages.classList.add("flex");
// images.forEach(item => {
//   galeryImages.insertAdjacentHTML(
//     "afterbegin",
//     `<li><img src=${item.url} width="400px"></li>`
//   );
// });

// ------------------------------------------
// -------------------TASK 4-----------------

// let counterValue = document.querySelector("#value");
// const btnsDiv = document.querySelector("#counter");
// const btnDecrement = btnsDiv.firstElementChild;
// const btnIncrement = btnsDiv.lastElementChild;

// btnIncrement.addEventListener("click", () => {
//   counterValue.innerText++;
// });

// btnDecrement.addEventListener("click", () => {
//   counterValue.innerText--;
// });

// ------------------------------------------
// -------------------TASK 5-----------------
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// const userInput = document.querySelector("#name-input");
// const userOutput = document.querySelector("#name-output");

// userInput.addEventListener("input", event => {
//   const input = event.target.value;
//   userOutput.textContent = input;
// });

// ------------------------------------------
// -------------------TASK 6-----------------

// const userInput = document.querySelector("#validation-input");
// console.log("userInput :", userInput);
// const inputMax = userInput.getAttribute("data-length");
// console.log("inputMax :", inputMax);

// userInput.addEventListener("blur", event => {
//   let userInputValue = event.target.value;
//   console.log(userInputValue);

//   if (userInputValue.length === Number(inputMax)) {
//     userInput.classList.add("valid");
//     userInput.classList.remove("invalid");
//   }
//   if (userInputValue.length !== Number(inputMax)) {
//     userInput.classList.add("invalid");
//     userInput.classList.remove("valid");
//   }
// });

// ------------------------------------------
// -------------------TASK 7-----------------

// const fontControl = document.querySelector("#font-size-control");
// const textStyle = document.querySelector("#text");

// fontControl.oninput = function() {
//   textStyle.style.fontSize = `${fontControl.value}px`;
// };

