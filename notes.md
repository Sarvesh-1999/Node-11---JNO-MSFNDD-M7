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