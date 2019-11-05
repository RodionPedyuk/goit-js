"use strict";
// -------- TASK 1 ----------------
// let name = "Генератор защитного поля";
// let price = 1000;

// console.log(`выбран ${name}, цена за штуку ${price} кредитов`)

// price = 2000;

// console.log(`выбран ${name}, цена за штуку ${price} кредитов`);

// ---------------------------------

// ---------- TASK 2 ---------------

// const total = 100;
// const ordered = Number(prompt("введите количество заказанного товара"));
// console.log(ordered);

// if(ordered > 100){
//    alert("На складе недостаточно товаров!");
// }else{
//     alert("Заказ оформлен, с вами свяжется менеджер");
// }

// ---------------------------------

// ---------- TASK 3 ---------------

// const ADMIN_PASSWORD = 'qwerty';
// let message;

// let passInput = prompt("Введите пароль...")

// console.log(passInput);

// if(passInput === null){
//     message = "Отменено пользователем!";
// }else if(passInput === "qwerty"){
//     message = "Добро пожаловать!";
// }else{
//     message = "Доступ запрещен, неверный пароль!";
// }

// alert(message);

// ---------------------------------

// ---------- TASK 4 ---------------

// let credits = 23580;
// let pricePerDroid = 3000;
// let dronOrder = Number(prompt("Введите количество заказанных дроидов"));
// let orderSumary = dronOrder * pricePerDroid;
// let creditLeft = credits - orderSumary;

// if (creditLeft < 0) {
//   console.log("Недостаточно средств на счету!");
// } else if (dronOrder === 0) {
//   console.log("Отменено пользователем!");
// } else {
//   console.log(`Вы купили ${dronOrder} дроидов, на счету осталось ${creditLeft} кредитов.`);
// }

// ---------------------------------

// ---------- TASK 5 ---------------

// let countryChina = "Китай"; 
// let countryChili = "Чили"; 
// let countryAustralia = "Австралия"; 
// let countryIndia = "Индия"; 
// let countryJamaica = "Ямайка"; 

// let priceChina = 100;
// let priceChili = 250;
// let priceAustralia = 170;
// let priceIndia = 80;
// let priceJamaica = 120; 

// let message;

// let userCountry = prompt("Введите страну доставки..."); 
// switch (userCountry!==null && userCountry.toLowerCase()) {
//     case countryChina.toLowerCase(): message = `Доставка в ${countryChina} будет стоить ${priceChina} кредитов`;
//     break;

//     case countryChili.toLowerCase(): message = `Доставка в ${countryChili} будет стоить ${priceChili} кредитов`;
//     break;

//     case countryAustralia.toLowerCase(): message = `Доставка в ${countryAustralia} будет стоить ${priceAustralia} кредитов`;
//     break;

//     case countryIndia.toLowerCase(): message = `Доставка в ${countryIndia} будет стоить ${priceIndia} кредитов`;
//     break;

//     case countryJamaica.toLowerCase(): message = `Доставка в ${countryJamaica} будет стоить ${priceJamaica} кредитов`;
//     break;

//     default: message = "В вашей стране доставка не доступна!";
//     break;
// }

// alert(message);

// ---------------------------------

// ---------- TASK 6 ---------------

// let inputNum;
// let total = 0;


// do{ 
//     inputNum = prompt("Введите числа и нажмите кнопку cancel...");
//     (isNaN(inputNum) ? alert("Вводи только цифры!"):
//     total += Number(inputNum));
// }while(inputNum !== null);
// alert(`Общая сумма чисел равна ${total}`);

// ----------------------------------------