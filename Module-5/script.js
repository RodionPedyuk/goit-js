"use strict";

// --------------TASK 1------------------

// const Account = function(login, email) {
//   this._login = login;
//   this._email = email;
// };

// Account.prototype.getInfo = function() {
//   console.log(`login: ${this._login}, Email: ${this._email}`);
// };

// console.log(Account.prototype.getInfo); // function

// const mango = new Account("Mangozedog", "mango@dog.woof");
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account("Poly", "poly@mail.com");
// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// --------------------------------------
// --------------TASK 2------------------

// class User {
//   constructor({ name, age, followers }) {
//     this._name = name;
//     this._age = age;
//     this._followers = followers;
//   }
//   getInfo() {
//     console.log(
//       `User ${this._name} is ${this._age} years old and has ${this._followers} followers`
//     );
//   }
// }

// const mango = new User({ name: "Mango", age: 2, followers: 20 });
// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({ name: "Poly", age: 3, followers: 17 });
// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// --------------------------------------
// --------------TASK 3------------------

// class Storage {
//   constructor(storage) {
//     this.items = storage;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItems(a) {
//     this.items.push(a);
//   }
//   removeItem(x) {
//     let index = this.items.indexOf(x);
//     this.items.splice(index, 1);
//   }
// }

// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор"
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItems("Дроид");
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// --------------------------------------
// --------------TASK 4------------------

// class StringBuilder {
//   constructor(_value) {
//     this.value = _value;
//   }
//   set values(str) {
//     return (this.value = str);
//   }
//   get values() {
//     return this.value;
//   }

//   append(str) {
//     this.value = this.values + str;
//   }
//   prepend(str) {
//     this.value = str + this.values;
//   }
//   pad(str) {
//     this.value = str + this.values + str;
//   }
// }

// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'
// builder.values;
// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='

// --------------------------------------
// --------------TASK 5------------------

class Car {
  static getSpecs(car) {
    console.log(`maxSpeed: ${car._maxSpeed},
      speed: ${car._speed},
      isOn: ${car._isOn},
      distance: ${car._distance},
      price: ${car._price}`);
  }
  constructor({ maxSpeed, price, speed = 0, isOn = false, distance = 0 }) {
    this._maxSpeed = maxSpeed;
    this._price = price;
    this._speed = speed;
    this._isOn = isOn;
    this._distance = distance;
  }
  get price() {
    return this._price;
  }
  set price(price) {
    return (this._price = price);
  }

  turnOn() {
    this._isOn = true;
  }

  turnOff(x) {
    this._isOn = false;
    this._speed = 0;
  }

  accelerate(value) {
    if (this._maxSpeed >= value) {
      this._speed += value;
    }
    return this._speed;
  }

  decelerate(value) {
    if (value > 0) {
      this._speed -= value;
    }
    return this._speed;
  }

  drive(hours) {
    if (this._isOn) {
      this._distance = hours * this._speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
