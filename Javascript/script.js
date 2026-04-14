//! BASICS OF JS OBJECTS
// let company = "HCL";
// let key = "salary"

// let obj = {
//   name: "Aman",
//   age: "20",
//   getDetails: function () {
//     console.log(this.name, this.age);
//   },
//   company ,
//   [key] : 80000
// };

// // console.log(obj.name);
// // obj.getDetails();
// console.log(obj);

//! SPREAD OPERATOR
// let obj1 = {
//   username: "John",
//   email: "Doe",
// };

// let obj2 = {
//   ...obj1,
//   password: "abc123",
//   role: "user",
// };

// console.log(obj1);
// console.log(obj2);

//! DESTRUCTRING
// let obj1 = {
//   username: "John Doe",
//   email: "john@gmail.com",
//   password: "123456",
// };

// let { username, password } = obj1;
// console.log(username, password);

//! ASYNC AND SYNC
// console.log("Start");

// setTimeout(function t1() {
//   console.log("Timeout 1");
// }, 4000);

// console.log("Hiii Everyone");

// Promise.resolve().then(function p1() {
//   console.log("Promise 1");
// });

// setTimeout(function t2() {
//   console.log("Timeout 2");
// }, 1000);

// console.log("End");

//! MAP AND FOREACH()

// let arr = [10, 20, 30];

// let val1 = arr.forEach((ele, idx) => {
//   console.log(ele, idx);
//   return ele + 5;
// });

// console.log("------------");

// let val2 = arr.map((ele, idx) => {
//   console.log(ele, idx);
//   return ele + 5;
// });

// console.log("forEach ---->", val1);
// console.log("map ---->", val2);

//! HOW TO HANDLE PROMISES

// let p1 = new Promise((res, rej) => {
//   if (10 > 2) {
//     res("Hiii");
//   } else {
//     rej("Byeee");
//   }
// });

// //! then() and catch()
// p1.then(() => {
//   console.log("User Created");
// });

// p1.catch((err) => {
//   console.log("Something went wrong", err);
// });

//! async and await

function getData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Hiii");
    }, 3000);
  });
}

async function displayData() {
  try {
    let data = await getData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

displayData();
