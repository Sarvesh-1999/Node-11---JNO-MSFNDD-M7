# Node.js Prerequisites: Core JavaScript Concepts

Here are detailed notes based on your provided JavaScript code. These concepts are foundational for building applications in Node.js and modern JavaScript frameworks.

---

## 1. Basics of JavaScript Objects

Objects in JavaScript are collections of key-value pairs. Modern JavaScript (ES6+) introduced several enhancements to how we can define and interact with objects.

```javascript
let company = "HCL";
let key = "salary";

let obj = {
  name: "Aman",
  age: "20",
  getDetails: function () {
    console.log(this.name, this.age);
  },
  company,       // Property shorthand
  [key]: 80000   // Computed property name
};
```

### Key Takeaways:
* **Property Shorthand:** If a variable name (`company`) matches the desired object key, you can simply write the variable name inside the object instead of `company: company`.
* **Computed Properties:** By wrapping a variable in square brackets (`[key]`), JavaScript evaluates the variable's value and uses it as the property name. In this case, `[key]` becomes `"salary": 80000`.
* **Methods:** Functions can be stored as object properties (like `getDetails`). The `this` keyword inside the method refers to the object itself.

---

## 2. The Spread Operator (`...`)

The spread operator (`...`) allows an iterable (like an array) or an object to be expanded in places where zero or more arguments or elements are expected.

```javascript
let obj1 = {
  username: "John",
  email: "Doe",
};

let obj2 = {
  ...obj1,
  password: "abc123",
  role: "user",
};
```

### Key Takeaways:
* **Cloning and Merging:** `...obj1` copies all enumerable properties from `obj1` into `obj2`. 
* **Immutability:** This is a common pattern for creating a *new* object based on an existing one without mutating (changing) the original object. `obj1` remains untouched.

---

## 3. Object Destructuring

Destructuring assignment is a syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```javascript
let obj1 = {
  username: "John Doe",
  email: "john@gmail.com",
  password: "123456",
};

let { username, password } = obj1;
console.log(username, password); // Output: John Doe 123456
```

### Key Takeaways:
* **Cleaner Code:** Instead of writing `obj1.username` and `obj1.password` repeatedly, you extract them into standalone variables in a single line.
* **Targeted Extraction:** You only extract the properties you need (e.g., `email` was intentionally left out).

---

## 4. Synchronous vs. Asynchronous Execution (The Event Loop)

JavaScript is single-threaded. It executes code synchronously (line-by-line) but handles asynchronous operations via the Event Loop, separating tasks into the Call Stack, Microtask Queue, and Macrotask Queue.

```javascript
console.log("Start"); // Sync (Call Stack)

setTimeout(function t1() {
  console.log("Timeout 1"); // Async Macrotask (4s delay)
}, 4000);

console.log("Hiii Everyone"); // Sync (Call Stack)

Promise.resolve().then(function p1() {
  console.log("Promise 1"); // Async Microtask
});

setTimeout(function t2() {
  console.log("Timeout 2"); // Async Macrotask (1s delay)
}, 1000);

console.log("End"); // Sync (Call Stack)
```

### The Execution Order & Why:
1.  **`Start`**, **`Hiii Everyone`**, **`End`**: Synchronous code always runs first on the main thread.
2.  **`Promise 1`**: Promises go to the **Microtask Queue**. The Event Loop prioritizes the Microtask Queue over the Macrotask Queue and empties it immediately after synchronous code finishes.
3.  **`Timeout 2`**: `setTimeout` goes to the **Macrotask Queue**. Even with a 0ms delay, it waits for the Microtask Queue to clear. This runs after 1 second.
4.  **`Timeout 1`**: Runs last because it has the longest timer (4 seconds).

---

## 5. `map()` vs `forEach()`

Both are array methods used for iteration, but they serve different primary purposes.

```javascript
let arr = [10, 20, 30];

let val1 = arr.forEach((ele, idx) => {
  return ele + 5;
});

let val2 = arr.map((ele, idx) => {
  return ele + 5;
});

console.log("forEach ---->", val1); // Output: undefined
console.log("map ---->", val2);     // Output: [15, 25, 35]
```

### Key Takeaways:
* **`forEach()`:** Executes a provided function once for each array element. It **always returns `undefined`**. It is used when you want to perform an action or side effect (like logging to the console or saving to a database) but don't need a new array back.
* **`map()`:** Creates and **returns a brand-new array** populated with the results of calling the provided function on every element in the calling array. It does not mutate the original array.

---

## 6. Handling Promises

Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

### Method 1: `.then()` and `.catch()`
```javascript
let p1 = new Promise((res, rej) => {
  if (10 > 2) {
    res("Hiii"); // Resolves the promise
  } else {
    rej("Byeee"); // Rejects the promise
  }
});

p1.then(() => {
  console.log("User Created"); // Runs on success (res)
}).catch((err) => {
  console.log("Something went wrong", err); // Runs on failure (rej)
});
```

### Method 2: `async` and `await` (Modern Approach)
```javascript
function getData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Hiii");
    }, 3000);
  });
}

async function displayData() {
  try {
    let data = await getData(); // Pauses execution until getData resolves
    console.log(data); // Output after 3 seconds: Hiii
  } catch (error) {
    console.log(error); // Catches any rejections
  }
}

displayData();
```

### Key Takeaways:
* **`async/await`** is syntactic sugar on top of Promises. It makes asynchronous code look and behave a bit more like synchronous code, which makes it much easier to read.
* **`await`** can only be used inside a function marked with the **`async`** keyword.
* **Error Handling:** When using `async/await`, always wrap your logic in a `try...catch` block to handle potential Promise rejections, just as you would use `.catch()` in the traditional Promise chain.


# 📦 Node.js Modules & File System (FS) – Comprehensive Guide

## 📌 Introduction
In Node.js, building an entire application in a single file quickly becomes unmanageable. To solve this, we split our code into **smaller, reusable parts called modules**.

> 💡 **Analogy:** Think of modules like **Lego blocks**. You build small, independent pieces (like a piece of code that handles database connections or math operations) and snap them together to build a larger application.

Node.js also comes with powerful built-in modules. One of the most important is the **File System (`fs`)** module, which allows your server to interact directly with the computer's hard drive to read, write, and manage files.

---

## 🧠 What are Modules?

A **module** is a logical piece of isolated code. By keeping code inside a module, you protect its variables and functions from leaking into other parts of your app, preventing naming conflicts.

### 📂 Types of Modules

#### 1️⃣ Built-in Modules (Core Modules)
These come pre-installed with Node.js. You don't need to download them; you just import them.
* **`fs`**: File System (interacting with files).
* **`http`**: Creating web servers.
* **`path`**: Working with file and directory paths safely across different operating systems.

#### 2️⃣ User-Defined Modules
These are the files you write yourself. You can export logic from one file and import it into another.
```js
// math.js
export const add = (a, b) => a + b;
```

#### 3️⃣ Third-Party Modules
These are modules created by other developers and shared online. You download them using **npm** (Node Package Manager).
* **Examples:** `express` (for web servers), `mongoose` (for MongoDB), `axios` (for fetching data).
```bash
npm install express
```

---

## 🔄 Import & Export Methods

Node.js historically used CommonJS, but modern JavaScript uses ES Modules. 

### 📌 1. CommonJS (The Old Way)
This uses the `require()` function.
```js
const fs = require("fs");
```

### 📌 2. ES Modules (The Modern Way)
This uses `import` and `export` keywords. 
```js
import fs from "fs";
```
> ✅ **Recommended:** ES Modules are the modern standard. *Note: To use ES Modules in Node.js, you must add `"type": "module"` to your `package.json` file.*

---

## ⚙️ JavaScript Execution Types

To understand the `fs` module, you must understand how Node.js reads code.

* **Synchronous (Sync):** Executes **line by line**. The program stops and waits for the current operation to finish before moving to the next line. This is called "blocking" code.
* **Asynchronous (Async):** Executes in the background. Node.js initiates the task and immediately moves to the next line of code. When the background task finishes, Node.js goes back to handle the result. This is "non-blocking."

---

## 📁 File System (`fs`) Module

The `fs` module is used to perform **CRUD operations** (Create, Read, Update, Delete) on files and directories.

### 🔹 1. Synchronous File Operations
> ⚠️ **Warning:** Sync methods block the execution thread. If a file takes 3 seconds to read, your entire server freezes for 3 seconds. Use these only for simple scripts or during server startup, **never** in routes handling user requests.

#### 📝 Create / Write File
```js
import fs from "fs";

// Creates 'demo.txt' or overwrites it if it already exists
fs.writeFileSync("./demo.txt", "Hello World");
```

#### 📖 Read File
```js
const data = fs.readFileSync("./demo.txt", "utf-8");
console.log(data);
```
**🧠 Why do we need `"utf-8"`?**
Computers store files in raw binary (0s and 1s), which Node reads as a `Buffer`. Passing the `"utf-8"` encoding argument tells Node to translate that binary buffer back into human-readable text. Without it, `console.log(data)` would print something like `<Buffer 48 65 6c 6c 6f... >`.

#### ➕ Append (Update File)
Adds new text to the end of an existing file without deleting what is already there.
```js
fs.appendFileSync("./demo.txt", "\nThis is a new line");
```

#### ❌ Delete File
```js
fs.unlinkSync("./demo.txt");
```
