"use strict";

let user = {
  fname: "anna",
  age: 18,
};

let printName = user.fname + " არის" + " " + user.age + "წლის";
let printName2 = `${user.fname} არის ${user.age} წლის`;
console.log(printName);
console.log(printName2);

// loop object

let userInfo = {
  fname: "mariami",
  age: 25,
};

// for (let key in userInfo) {
//   // console.log(key); //key
//   console.log(userInfo[key]); //value
// }

//object.keys()
console.log(Object.keys(userInfo)); //[]

for (let item of Object.keys(userInfo)) {
  console.log(item); //fname age
}

//object.values()
console.log(Object.values(userInfo));
for (let el of Object.values(userInfo)) {
  console.log(el); //mariami 25
}

//object.entries()
console.log(Object.entries(userInfo));

for (let [key, value] of Object.entries(userInfo)) {
  console.log(key); //fname age
  console.log(value); //mariami 25
}

// functions
// 1. function declaration - hoisted

function testFnc1(number1, number2) {
  return number1 + number2;
}

let result = testFnc1(10, 50);
let result2 = testFnc1(5, 100);
console.log(result);
console.log(result2);

// 2. function expression - not hoisted

let testFnc2 = function (item = "Hello2") {
  return item;
};

let result3 = testFnc2();
let resultNew = testFnc2("Good evening");
console.log(result3);
console.log(resultNew);

// 3. arrow function - not hoisted
let testFnc3 = (x, y) => x * y;

let result4 = testFnc3(150, 5);
console.log(result4);

//
function testFncNew(number) {
  if (number === 2) {
    return "hi 2";
  } else if (number === 5) {
    return "hi 5";
  }
  return "error";
}

let restulNew = testFncNew(15);
console.log(restulNew);

//
function getAge1(birthyear, yearNow) {
  let age = yearNow - birthyear;
  return age;

  // return yearNow - birthyear;
}

let resultAge = getAge1(1999, 2025);
console.log(resultAge);

//
let getAge2 = function (birthyear, yearNow) {
  return yearNow - birthyear;
};

let resultAge2 = getAge2(2005, 2025);
console.log(resultAge2);

//
let getAge3 = (birthyear, yearNow) => {
  let age = yearNow - birthyear;
  //   if (age >= 18) {
  //     return "is adult";
  //   }
  //   return "is not adult";
  let conditionResult = age >= 18 ? "is adult" : "is not adult";
  return conditionResult;
};

let resultAge3 = getAge3(2012, 2025);
let resultAge4 = getAge3(1994, 2025);

console.log(resultAge3);
console.log(resultAge4);

//
function sum(...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let item of numbers) {
    sum = sum + item;
  }

  return sum;
}

let resultSum = sum(15, 14, 36, 25, 36, 10, 18);
console.log(resultSum);

//scope
// 1. global scope
let fname = "mariami";

// 2. function = local scope
function getUSerAge(birthyear) {
  let yearNow = 2025;
  let age = yearNow - birthyear;
  return age;
}

// console.log(age); //errror

let resultAgeUser = getUSerAge(2005);
console.log(resultAgeUser);

// 3. block scope
let birthyear = 20;
if (birthyear > 18) {
  let isAdult = true;
}
//
// console.log(isAdult); //error

// var - function scope
// let & const - function scope & block scope
