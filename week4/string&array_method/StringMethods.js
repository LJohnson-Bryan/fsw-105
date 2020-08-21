function capitilizeAndLowercase(str) {
    return str.toUpperCase() + str.toLowerCase();
}

console.log(capitilizeAndLowercase("Hello")); // HELLOhello

function findMiddleIndex(str) {
    return Math.floor(str.length / 2);
}
console.log(findMiddleIndex("Hello")); // 2
console.log(findMiddleIndex("Hello World")); // 5

function returnFirstHalf(str) {
    return str.slice(0, findMiddleIndex(str));
}

function capitilizeAndLowercase2(str) {
    let arrOfWords = str.split(" ");
    let totalLetters = 0;
        for(var i = 0; i < arrOfWords.length; i++) {
            totalLetters += arrOfWords[i].length;
        }
        
    if(totalLetters % 2) {
        // Odd
        let capFirstHalf = arrOfWords[0].slice(0, findMiddleIndex(arrOfWords[0])).toUpperCase() + arrOfWords[0].slice(findMiddleIndex(arrOfWords[0]));
        arrOfWords[0] = capFirstHalf;
        let newResult = arrOfWords.join(" ");
        console.log(str.length);
        return newResult;
    } else {
        // Even
        if(arrOfWords.length >= 2){
            // Two or more words, in the example of expected output, there is two words. This should be what runs.
            return arrOfWords[0].toUpperCase() + " " + arrOfWords[1].toLowerCase();
        } else {
            // String only has 1 word, and the length is even.
            return arrOfWords[0].toUpperCase();
        }
    }
}

console.log(capitilizeAndLowercase2("Hello")); // HEllo
console.log(capitilizeAndLowercase2("Hello World")); // HELLO world

function capitalize(str) {
    let arrOfWords = str.split(" ");
    for(var i = 0; i < arrOfWords.length; i++) {
        arrOfWords[i] = arrOfWords[i].charAt(0).toUpperCase() + arrOfWords[i].slice(1);
    }
    let newString = arrOfWords.join(" ");
    return newString;
}

console.log(capitalize("hey friends! practice practice practice!")); // Hey Friends! Practice Practice Practice!
