//! COMMON JS WAY
// const { greet, add } = require("./functions.js");
// const substraction = require("./utilities.js");

// greet();
// add(10, 20);
// substraction(10, 5);

//!---------------------------------------------

//! ES MODULE WAY ( RECOMMENDED )

import { greet, add } from "./functions.js";
import minus from "./utilities.js";

greet();
minus(10, 8);
