const readline = require("readline-sync");

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    let wholeNumber = num1 / num2;
    let remainder = num1 % num2;
    let answer = `${Math.floor(wholeNumber)} Remainder: ${remainder}`;    
    return answer;
}

function subtract(num1, num2) {
    return num1 - num2;
}

// When the script is run, the program automatically declares isExiting false. This way we may do as many calculations as we want until we tell the program to exit.
let isExiting = false;

while(isExiting === false) {
    let operation = readline.question("What operation do you wish to perform? \nAdd | Multiply | Divide | Subtract | Exit\n");

if(operation.toLowerCase() === "exit") {
    console.log("Thank you for using the javascript calculator!");
    isExiting = true;
} else {

    let numberOne = parseInt(readline.question(`Please enter your first number to ${operation}\n`));
    let numberTwo = parseInt(readline.question(`Please enter your second number to ${operation}\n`));

    switch(operation.toLowerCase()) {

        case "add":
            console.log(`The result is: ${(add(numberOne, numberTwo))}`);
        break;
        case "multiply":
            console.log(`The result is: ${(multiply(numberOne, numberTwo))}`);
        break;
        case "divide":
            console.log(`The result is: ${(divide(numberOne, numberTwo))}`);
        break;
        case "subtract":
            console.log(`The result is: ${(subtract(numberOne, numberTwo))}`);
        break;
        default:
            console.log("Command not recognized. Please try again.");

}
}
}
