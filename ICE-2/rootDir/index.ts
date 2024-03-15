import promptSync from "prompt-sync";

// 
import { mathOperations } from "./calculator";

// Added return type annotation for the function as void since it doesn't return anything
const readInput = (): void => {
  console.log("Welcome to the calculator. Choose one of the following options");
  console.log("1. add");
  console.log("2. subtract");
  console.log("3. multiply");
  console.log("4. divide");
  console.log("5. exit");

  const prompt = promptSync(); // Initialized prompt-sync here
  let option = prompt(">> ");

  if (option !== "5") {
    console.log("Enter the first number");
    
    // Explicitly parsed input as number
    let a = Number(prompt(">> "));
  
    console.log("Enter the second number");
    // Explicitly parsed input as number
    let b = Number(prompt(">> "));
  
    let c: number; // Added type annotation for c as number
    switch(option) {
      case "1": {
        c = mathOperations.add(a, b); // Accessing add through mathOperations
        console.log(`a + b = ${c}`);
      }
      break;
  
      case "2": {
        c = mathOperations.subtract(a, b); // Accessing subtract through mathOperations
        console.log(`a - b = ${c}`);
      }
      break;
  
      case "3": {
        c = mathOperations.multiply(a, b); // Accessing multiply through mathOperations
        console.log(`a * b = ${c}`);
      }
      break;
  
      case "4": {
        c = mathOperations.divide(a, b); // Accessing divide through mathOperations
        if(b === 0) {
          console.log("Cannot divide by zero.");
        } else {
          console.log(`a / b = ${c}`);
        }
      }
      break;
    }    
  
    readInput();
  }
}
  




// var prompt     = require("prompt-sync")();
// var calculator = require("./calculator");


// var readInput = () => {
//   console.log("Welcome to the calculator. Choose one of the following options");
//   console.log("1. add");
//   console.log("2. subtract");
//   console.log("3. multiply");
//   console.log("4. divide");
//   console.log("5. exit");

//   var option = prompt(">> ");

//   if (option !== "5") {
//     console.log("Enter the first number");
//     let a = Number(prompt(">> "));

//     console.log("Enter the second number");
//     let b = Number(prompt(">> "));

//     let c;
//     switch(option){
//       case "1": {
//         c = calculator.add(a, b);
//         console.log(`a + b = ${c}`);
//       }
//       break;

//       case "2": {
//         c = calculator.subtract(a, b);
//         console.log(`a - b = ${c}`);
//       }
//       break;

//       case "3": {
//         c = calculator.multiply(a, b);
//         console.log(`a * b = ${c}`);
//       }
//       break;

//       case "4": {
//         c = calculator.divide(a, b);
//         console.log(`a / b = ${c}`);
//       }
//       break;
//     }    

//     readInput();
//   }
// }

// readInput();

// console.log("Thank you for using calculator. Good Bye");