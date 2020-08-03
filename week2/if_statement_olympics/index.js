/*
// Preliminaries

if (5 > 3) {
    console.log("is greater than");
}

var cat = "cat";
if (cat.length === 3) {
    console.log("is the length");
}

var dog = "dog";
if (cat === dog) {
    console.log("are the same");
} else {
    console.log("not the same");
}

// Bronze Medal

var person = {
    name: "Bobby",
    age: 12
}

if (person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie")
}

if (person.name.charAt(0) === "B") {
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie")
}

if (person.age >= 18 && person.name.charAt(0) === "B") {
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie")
}

// Silver Medal

if ("1" === 1) {
    console.log ("one is equal to one"); // "strict" comparison
} else if ("1" == 1) {
    console.log("one is equal to one"); // "abstract" comparison
} else {
    console.log("not equal at all"); // if none of the above are true
}

if (1 <= 2 && 2 === 4) {
    console.log("yes");
}

// Gold Medal

// For this, I am re-using the dog variable declared earlier in the code.
if (typeof dog === "string") {
    console.log("dog is a string");
}

if (typeof true === "boolean") {
    console.log("true is a boolean");
}

if ("s" > 12) {
    console.log("s is greater than 12");
}

if ("sakfoekalsfjeielq" > 12) {
    console.log("s is greater than 12");
}

var myNum = 10;

myNum % 2 === 0 ? console.log("The number " + myNum + " is even!") : console.log("The number " + myNum + " is odd!"); 
*/

// For the extra credit, i've commented out the entire top section and will now re-write it using ternary operators. Including the "Extra Extra Credit" Gold Medal section.

// Extra Credit Version Preliminaries

5 > 3 ? console.log("it is greater than") : console.log("it is not greater than");

var cat = "cat";
cat.length === 3 ? console.log("is the length") : console.log("is not the length");

var dog = "dog";
cat === dog ? console.log("are the same") : console.log("not the same");

// Extra Credit Version Bronze Medal

var person = {
    name: "Bobby",
    age: 12
}

person.age >= 18 ? console.log(person.name + " is allowed to go to the movie") : console.log(person.name + " is not allowed to go to the movie");

person.name.charAt(0) === "B" ? console.log(person.name + " is allowed to go to the movie") : console.log(person.name + " is not allowed to go to the movie");

person.age >= 18 && person.name.charAt0 === "B" ? console.log(person.name + " is allowed to go to the movie") : console.log(person.name + " is not allowed to go to the movie");

// Extra Credit Version Silver Medal

/*
if ("1" === 1) {
    console.log ("one is equal to one"); // "strict" comparison
} else if ("1" == 1) {
    console.log("one is equal to one"); // "abstract" comparison
} else {
    console.log("not equal at all"); // if none of the above are true
}*/
switch (true) {
    case "1" === 1:
        console.log ("one is equal to one"); // "strict" comparison
    break;

    case "1" == 1:
        console.log("one is equal to one"); // "abstract" comparison
    break;

    default:
        console.log("not equal at all"); // if none of the above are true

}

1 <=2 && 2 === 4 ? console.log("yes") : console.log("no");

// Extra Credit Version Gold Medal

// For this, I am re-using the dog variable declared earlier in the code.
typeof dog === "string" ? console.log("dog is a string") : console.log("dog is not a string");

typeof true === "boolean" ? console.log("true is a boolean") : console.log("true is not a boolean");

"s" > 12 ? console.log("s is greater than 12") : console.log("s is not greater than 12");

"sakfoekalsfjeielq" > 12 ? console.log("sakfoekalsfjeielq is greater than 12") : console.log("sakfoekalsfjeielq is not greater than 12");

var myNum = 10;
myNum % 2 === 0 ? console.log("The number " + myNum + " is even!") : console.log("The number " + myNum + " is odd!"); 