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

var fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

function firstFibonacciNumbers(n) {
    var total = 0;
    for (var i = 0; i < n; i++) {
        total += fibonacciNumbers[i];
    }
    return total;
}

console.log(firstFibonacciNumbers(5));

function maxChar(myStr) {
    let charObj = {};
    return [...myStr].reduce((_, char) => {
      if (char in charObj) charObj[char]++;
      else if (char !== " ") charObj[char] = 1;
      return Object.keys(charObj).reduce((a, b) => {
        return charObj[a] > charObj[b] ? a : b;
      });
    });
  }

console.log(maxChar("hello world!"));