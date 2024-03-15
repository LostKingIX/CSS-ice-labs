// Added type annotations to parameters and return type to ensure they are numbers
export const add = (a: number, b: number): number => 
{
  return a + b;
}

// Added type annotations to parameters and return type to ensure they are numbers
export const subtract = (a: number, b: number): number => 
{
  return a - b;
}

// Added type annotations to parameters and return type to ensure they are numbers
export const multiply = (a: number, b: number): number => 
{
  return a * b;
}

// Added type annotations to parameters and return type
// Also added a check for division by zero to prevent runtime errors
export const divide = (a: number, b: number): number => 
{
  if (b === 0) throw new Error("Division by zero is not allowed."); // Error handling for division by zero
  return a / b;
}

export const mathOperations = {
  add,
  subtract,
  multiply,
  divide
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