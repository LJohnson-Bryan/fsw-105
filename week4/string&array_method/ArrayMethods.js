var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// Creating function to not repeat the same line of code multiple times.
// This function will log the status of the arrays after each action performed.
function doAction(consoleLog) {
    console.log ("");
    console.log(consoleLog);
    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);
}

function doFoodAction(consoleLog) {
    console.log ("");
    console.log(consoleLog);
    console.log("food: ", food);
}

doAction("Arrays before changing:");

// Remove the last item from the vegetable array.
vegetables.pop(); 
doAction("Removing last item from the vegetable array.");

// Remove the first item from the fruit array.
fruit.shift();
doAction("Removing the first item from the fruit array.");

// Find the index of "orange."
doAction("The index of \"orange\" is: " + fruit.indexOf("orange"));

// Add that number to the end of the fruit array.
fruit.push(fruit.indexOf("orange"));
doAction("Pushing the index of \"orange\" to fruit array.");


// Use the length property to find the length of the vegetable array.
doAction("The length of vegetable array is: " + vegetables.length);


// Add that number to the end of the vegetable array.
vegetables.push(vegetables.length);
doAction("Adding the vegetables length to the end of the array.");

// Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables);
doFoodAction("Combining the arrays togther.");

// Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2);
doFoodAction("Removing 2 elements from the new array starting at index 4.");

// Reverse your array.
food.reverse();
doFoodAction("Reversed food array.");

// Turn the array into a string and return it.
var joinedFood = food.join(",");
console.log("Turning array into a string and returning it.");
console.log(joinedFood);

// If you've done everything correctly, the last step should print the following string to the console:
