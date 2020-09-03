var readlineSync = require('readline-sync');

let isAlive = true, foundKey = false; 

const userName = readlineSync.question("What is your name?: "); 
console.log(`${userName}, You are inside of an escape room. You must find a way out.`);

while(isAlive) {
    userAction = readlineSync.keyInSelect([
        "Put hand in hole",
        "Find the key",
        "Open the door"
    ], `What will you do, ${userName}?`);
    
    switch(userAction) {
        case -1: // User hit "0" to exit the game.
            console.log("Thanks for playing!");
            isAlive = false; // Kill the player from the game to exit the loop.
        break;
        case 0: // User sticks their hand in the hole. They die instantly.
            console.log("You put your hand in the hole and you die!");
            isAlive = false;
            console.log(`${userName}, you are now dead. Thanks for playing.`);
        break;
        case 1: // User attempts to find the key.
            if(!foundKey) {
                // User has not found the key, giving user the key.
                console.log("You find the key!");
                foundKey = true;
            } else {
                // User has already found the key. They might be looking for more, notifying that there are no other keys.
                console.log("You already have the key. You look, and there are no other keys..");
            }
        break;
        case 2: // User attempts to open the door.
            if(foundKey) {
                console.log("You unlock the door, and escape the escape room!");
                isAlive = false;
            } else {
                console.log("You twist the handle, but it is locked. You must figure out how to unlock the door.");
            }
        break;
        default:
            console.log("Invalid Choice! Try again!");
    }
    
}
