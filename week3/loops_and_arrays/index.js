var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },
    {
        name: "Madeline",
        age: 80,
        gender: "female"
    },
    {
        name: "Cheryl",
        age: 22,
        gender: "female"
    },
    {
        name: "Sam",
        age: 30,
        gender: "male"
    },
    {
        name: "Suzy",
        age: 4,
        gender: "female"
    },
];

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ? console.log("old enough") : console.log ("not old enough");
}

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ? console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max.") : console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max.");
}

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ? console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, HE'S good to see the movie.") : console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, dont let HIM in.");
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ? console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, SHE'S good to see the movie.") : console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let HER in.");
    }
    
}

for(var i = 0; i < 101; i++) {
    (i % 2) ? console.log(i + " is odd") : console.log(i + " is even");
}

var arrayOfArrays = [
    [2, 5, 435, 4, 3],
    [1, 1, 1, 1, 3],
    [9, 3, 4, 2]
];

// If it is odd, it's turned on. If it's Even its turned off.
var totalTimesFlipped = 0; // Declaring Variable for later.
for (var i = 0; i < arrayOfArrays.length; i++) {
    var timesFlippedInArray = 0; // Starting position: off.
    for(var x = 0; x < arrayOfArrays[i].length; x++) {    
        timesFlippedInArray += arrayOfArrays[i][x]; // Find the array within the arrayOfArrays, and add how many times it has been flipped (adding each number to the times flipped on this array).
    }
    // Divide by two to determine that it is even or odd. (Getting remainder. There will be no remainders on even numbers making this if statement evaluate to false if it is even -- which means turned off).
    if(timesFlippedInArray % 2) {
        // There is a remainder, because this evaluated to true. The light switch is on. (Number is odd).
        console.log("The light switch has been flipped " + timesFlippedInArray + " times, so it is on.");
    } else {
        // There is no remainder, so this if statement turned false (making else run and showing this number is even. Having 0 remainder makes the condition false).
        console.log("The light switch has been flipped " + timesFlippedInArray + " times, so it is off.");
    }
    // Adding to the total times flipped for the status of the light switch after all of the flipping in the arrays.
    totalTimesFlipped = totalTimesFlipped + timesFlippedInArray;
}

// Determine final status of the light switch.
if(totalTimesFlipped % 2){
    console.log("The light switch has been flipped " + totalTimesFlipped + " TOTAL times, so it is on. (Right Now)");
} else {
    console.log("The light switch has been flipped " + totalTimesFlipped + " TOTAL times, so it is off. (Right Now)");
}