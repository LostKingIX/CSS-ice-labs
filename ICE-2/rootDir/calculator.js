"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathOperations = exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
// Added type annotations to parameters and return type to ensure they are numbers
const add = (a, b) => {
    return a + b;
};
exports.add = add;
// Added type annotations to parameters and return type to ensure they are numbers
const subtract = (a, b) => {
    return a - b;
};
exports.subtract = subtract;
// Added type annotations to parameters and return type to ensure they are numbers
const multiply = (a, b) => {
    return a * b;
};
exports.multiply = multiply;
// Added type annotations to parameters and return type
// Also added a check for division by zero to prevent runtime errors
const divide = (a, b) => {
    if (b === 0)
        throw new Error("Division by zero is not allowed."); // Error handling for division by zero
    return a / b;
};
exports.divide = divide;
exports.mathOperations = {
    add: exports.add,
    subtract: exports.subtract,
    multiply: exports.multiply,
    divide: exports.divide
};
// *** Original JS Code **
// let add = (a, b) => {
//   return a + b;
// }
// let subtract = (a, b) => {
//   return a - b;
// }
// let multiply = (a, b) => {
//   return a * b;
// }
// let divide = (a, b) => {
//   return a / b;
// }
// module.exports = {
//   add        : add,
//   subtract   : subtract,
//   multiply   : multiply,
//   divide     : divide
// } 
//# sourceMappingURL=calculator.js.map