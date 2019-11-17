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

// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

const galeryImages = document.querySelector("#gallery");
galeryImages.classList.add("flex");
images.forEach(item => {
  galeryImages.insertAdjacentHTML(
    "afterbegin",
    `<li><img src=${item.url} width="400px"></li>`
  );
  //   const createLi = document.createElement("li");
  //   const createImg = document.createElement("img");

  //   const galleries = galeryImages.insertAdjacentHTML("afterbegin", createLi);
});
