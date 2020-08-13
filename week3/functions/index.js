function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(2, 2)); // Returns 4

function returnLargestNumber(numberOne, numberTwo, numberThree) {
    return Math.max(numberOne, numberTwo, numberThree);
}

console.log(returnLargestNumber(1, 22, 3)); // Returns 22

function isNumberOdd(number) {
    return number % 2 ? "odd" : "even";
}

console.log(isNumberOdd(2));

function stringCombination(str) {
    if(str.length <= 20) {
        return str + str;
    } else if(str.length > 20) {
        return str.slice(0, str.length / 2);
    }
}

console.log(stringCombination("Hello world!"));
console.log(stringCombination("Hello world! What a nice day it is outside! Let's take a walk!"));
