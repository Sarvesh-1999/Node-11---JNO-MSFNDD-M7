//! commonJS (OLDER WAY)
// function greet() {
//   console.log("I am greet function");
// }

// function add(n1, n2) {
//   console.log(n1 + n2);
// }

// module.exports = { greet, add };

//! ----------------------------------------------

//! ES MODULE WAY ( RECOMMENDED )

export const greet = () => {
  console.log("I am greet function");
};

export function add(n1, n2) {
  console.log(n1 + n2);
}

// export { greet, add };
