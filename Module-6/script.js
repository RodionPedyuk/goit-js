import users from "./users.js";
("use strict");

// --------------TASK 1------------------
// const getUserNames = users => {
//   users = users.map(users => users.name);
//   return users;
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// --------------------------------------
// --------------TASK 2------------------

// const getUsersWithEyeColor = (users, color) => {
//   users = users.filter(users => users.eyeColor === color);
//   return users;
// };

// console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект

// --------------------------------------
// --------------TASK 3------------------

// const getUsersWithGender = (users, gender) => {
//   users = users.filter(users => users.gender === gender);
//   users = users.map(users => users.name);
//   return users;
// };

// console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// --------------------------------------
// --------------TASK 4------------------

// const getInactiveUsers = users => {
//   users = users.filter(users => users.isActive !== true);
//   return users;
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson

// --------------------------------------
// --------------TASK 5------------------

// const getUserWithEmail = (users, email) => {
//   users = users.find(users => users.email === email);
//   return users;
// };

// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// --------------------------------------
// --------------TASK 6------------------

// const getUsersWithAge = (users, min, max) => {
//   users = users.filter(users => users.age >= min && users.age <= max);
//   return users;
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// --------------------------------------
// --------------TASK 7------------------

// const calculateTotalBalance = users =>
//   (users = users.reduce((acc, user) => acc + user.balance, 0));

// console.log(calculateTotalBalance(users)); // 20916

// --------------------------------------
// --------------TASK 8------------------

// const getUsersWithFriend = (users, friendName) => {
//   users = users.filter(user => user.friends.includes(friendName));
//   users = users.map(users => users.name);
//   return users;
// };

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// --------------------------------------
// --------------TASK 9------------------

// const getNamesSortedByFriendsCount = users =>
//   users
//     .sort((a, b) => (a.friends.length > b.friends.length ? 1 : -1))
//     .map(users => users.name);

// console.log(getNamesSortedByFriendsCount(users));

// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// --------------------------------------
// --------------TASK 10------------------

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users =>
  users.reduce((acc, users) => {
    acc.push(...users.skills);
    return [...new Set(acc)];
  }, []);

console.log(getSortedUniqueSkills(users));
[
  "adipisicing",
  "amet",
  "anim",
  "commodo",
  "culpa",
  "elit",
  "ex",
  "ipsum",
  "irure",
  "laborum",
  "lorem",
  "mollit",
  "non",
  "nostrud",
  "nulla",
  "proident",
  "tempor",
  "velit",
  "veniam"
];
