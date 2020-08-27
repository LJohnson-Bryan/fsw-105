const name = "John";
const age = 101;

function runForLoop(pets) {
    let petObjects = [];
    for(let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if(pets[i] === "cat") {
            name = "fluffy";
        } else {
            name = "spot";
        }
        console.log("pet name: ", name);
        pet.name = name;
        petObjects.push(pet);
    }
    console.log("man name: ", name);
    return petObjects;
}

runForLoop(["cat", "dog"]);

const carrots = ["bright orange", "ripe", "rotten"];

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    });
}

console.log(mapVegetables(carrots));

const people = [
    { name: "Princess Peach", friendly: false },
    { name: "Luigi", friendly: true },
    { name: "Mario", friendly: true },
    { name: "Bowser", friendly: false }
];

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly);
}

console.log(filterForFriendly(people));

const doMathSum = (a, b) => {
    return a + b;
}

console.log(doMathSum(2, 3));

var produceProduct = (a, b) => {
    return a * b;
};

console.log(produceProduct(3, 2));

const printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
};

console.log(printString());
// console.log(printString("Kat", "Stark", 40));

const animals = [
    { type: "dog", name: "Theodore" },
    { type: "cat", name: "Whiskers" },
    { type: "pig", name: "Piglette" },
    { type: "dog", name: "Sparky" },
];

function filterForDogs(arr) {
    return arr.filter(animal => animal.type === "dog");
}

console.log(filterForDogs(animals));

const welcomeMessage = (name = "Janice", location = "Hawaii") => {
    return `Hi ${name}!\n\nWelcome to ${location}.\n\nI Hope you enjoy your stay. Please ask the president of ${location} if you need anything.`;
};

console.log(welcomeMessage("Jane", "Canada"));
