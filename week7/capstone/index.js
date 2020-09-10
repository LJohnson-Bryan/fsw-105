const readline = require('readline-sync');

// State Management
let isAlive = true, combatFlagged = false, enemy;

// Naming Arrays
let enemyNames = ["Evil Slime", "Minotaur", "Rat", "Slime", "Bat", "Vampire", "Mummy", "Spider", "Mimick", "Wolf", "Pack of Wolves"];
let lootItems = ["Bowling Ball", "Rusty Artifact", "Old Sword", "Old Boot", "Piece of clothing", "Sunglasses"];

class Enemy {
    constructor(name, health, power, reward, coinsValue) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.power = power;
        this.reward = reward;
        this.coinsValue = coinsValue;
    }
    punch() {
        // Punch the player. Give them slightly less damage on more powerful opponents.
        const amountDamaged = Math.floor(random(1,3)) * this.power - (this.power >= 3 ? 1 : 0);
        // Apply the damage to their health pool.
        playerData.health = playerData.health - amountDamaged;
        if(playerData.health <= 0) {
            isAlive = false;
            console.log(`${this.name} punches you for ${amountDamaged} HP!\n\nIt is fatal, and you die! Long live, ${playerData.name}! May you rest well in the afterlife.`)
        } else {
            console.log(`${this.name} punches you for ${amountDamaged} HP! You are now at ${playerData.health}/20 HP`);
        }
    }
    kick() {
    // Kick the player. Give them slightly more damage on more powerful opponents.
    const amountDamaged = Math.floor(random(1,3)) * this.power + (this.power >= 3 ? 1 : 0);
    // Apply the damage to their health pool.
    playerData.health = playerData.health - amountDamaged;
    if(playerData.health <= 0) {
        isAlive = false;
        console.log(`${this.name} kicks you for ${amountDamaged} HP!\n\nIt is fatal, and you die! Long live, ${playerData.name}! May you rest well in the afterlife.`)
    } else {
        console.log(`${this.name} kicks you for ${amountDamaged} HP! You are now at ${playerData.health}/20 HP`);
    }
    }
    damage() {
        // Player hits the enemy. Let's make sure they do damage. Punches dont heal enemies.
        let amountDamaged = Math.floor(random(2, 5) * 2 - (this.power - 1));
        if(amountDamaged <= 4) {
            amountDamaged = Math.floor(random(2, 4));
            // Apply the damage
            enemy.health = enemy.health - amountDamaged;
            console.log(`${playerData.name} punches ${enemy.name} for ${amountDamaged} HP.\n\nEnemy Health Remaining: ${this.health}/${this.maxHealth} HP\n${playerData.name}'s Health Remaining: ${playerData.health}/20 HP\n\n`);
        } else {
            // Apply the damage
        enemy.health = enemy.health - amountDamaged;
            console.log(`${playerData.name} hit a combo on ${enemy.name} for ${amountDamaged} HP !!\n\nEnemy Health Remaining: ${this.health}/${this.maxHealth} HP\n${playerData.name}'s Health Remaining: ${playerData.health}/20 HP\n\n`);
        }
        if(enemy.health <= 0) {
            // Remove combat flag state
            combatFlagged = false;
            // Heal player for 1/2 of missing health
            playerData.health >= 15 ? playerData.health = 20 : playerData.health += (20 - playerData.health) / 2;

            // Rewards for beating the enemy
            console.log(`${playerData.name} successfully defeated, ${enemy.name}!\n\nYour Rewards:\nCoins Gained: ${this.coinsValue}\nLoot Gained: ${this.reward}`);
            playerData.inventory.bag.push(this.reward);
            playerData.inventory.coins += this.coinsValue;
        }
    }
}

const random = (mn, mx) => {
    return Math.random() * (mx - mn) + mn;
}

const generateEnemy = () => {
    return new Enemy(enemyNames[Math.floor(random(0,enemyNames.length))], Math.floor(random(5,15)), Math.floor(random(1,5)), lootItems[Math.floor(random(0,lootItems.length))], Math.floor(random(1, 15)));
}

let playerData = {
    name: "Player", // Will be over-written by the opening question.
    health: 20, // Default player health.
    inventory: {
        coins: 0,
        bag: []
    }
}

// Everything is prepped. Initialize the game.
playerData.name = readline.question("Welcome to Colossal Adventure!\nThe year is 1985, and you're a monster hunter.\nAdventurer, what is your name?\n");
console.clear();
console.log(`Ahh, ${playerData.name}! You are now a monster hunter.\nThere are monsters roaming the world, and it is your job to just walk and destroy them all!\nTry doing "W" to walk!`);

while(isAlive) {
    combatFlagged ? console.log("Available Actions: < Attack / Run >") : console.log("Available Actions: < W / Print / Help / Quit >");
    let query = readline.question("What is your next action?\n");
    if(combatFlagged) {
        switch(query.toLowerCase()) {
            case "attack":
                console.clear();
                enemy.damage();
                if(enemy.health > 0) {
                    random(1, 2) === 1 ? enemy.punch() : enemy.kick();
                }
            break;
            case "run":
                console.clear();
                console.log("You attempt to escape!");
                if(Math.random() <= 0.5) {
                    console.log(`You successfully escape from ${enemy.name}!`);
                    combatFlagged = false;
                } else {
                    console.log(`You fail to escape from ${enemy.name}!`);
                    enemy.punch();
                }
            break;
            case "print":
                console.clear();
                console.log(`Showing player data for: ${playerData.name}\nHealth: ${playerData.health}/20 HP\nCoins: ${playerData.inventory.coins}\nInventory Bag: ${playerData.inventory.bag}`);
            break;
            case "quit":
                console.log(`Farewell, ${playerData.name}! Thanks for playing Colossal Adventure!`);
                isAlive = false;
            break;
            default:
                console.log("Command not recognized.");
        }
    } else {
        switch (query.toLowerCase()) {
            case "w":
                if(Math.random() < 0.7) {
                   enemy = generateEnemy();
                   combatFlagged = true;
                   console.clear();
                   console.log(`A wild ${enemy.name} has appeared!\nEntering Combat Mode...\n\n${enemy.name} is a power level ${enemy.power} enemy with ${enemy.health}/${enemy.health} HP.`);
                } else {
                    console.log("You walk forward. Nothing to see here.");
                }
            break;
            case "quit":
                console.log(`Farewell, ${playerData.name}! Thanks for playing Colossal Adventure!`);
                isAlive = false;
            break;
            case "print":
                console.clear();
                console.log(`Showing player data for: ${playerData.name}\nHealth: ${playerData.health}/20 HP\nCoins: ${playerData.inventory.coins}\nInventory Bag: ${playerData.inventory.bag}`);
            break;
            case "help":
                console.clear();
                console.log("Help menu:\n'W' -> Walks forward to look for enemies.\n'Print' -> Shows character information and inventory.\n'Quit' -> Quits the game.")
            break;
            case "sell":
                console.clear();
                console.log(`Selling bag... (${playerData.inventory.bag.length} items)\n`);
                    // let lootItems = ["Bowling Ball", "Rusty Artifact", "Old Sword", "Old Boot", "Piece of clothing", "Sunglasses"];
                    let amountGained = 0;

                    // Loop through, and count how many of each item the player had..
                    let bowlingBall, rustyArtifact, oldSword, oldBoot, pieceOfClothing, sunGlasses;
                    playerData.inventory.bag.forEach(item => {
                        switch (item) {
                            case "Bowling Ball":
                                bowlingBall++;
                            break;
                            case "Rusty Artifact":
                                rustyArtifact++;
                            break;
                            case "Old Sword":
                                oldSword++;
                            break;
                            case "Old Boot":
                                oldBoot++;
                            break;
                            case "Piece of clothing":
                                pieceOfClothing++;
                            break;
                            case "Sunglasses":
                                sunGlasses++;
                            break;
                        }
                    });

                    // Coin values multiplied by the amount of each item the player had...
                    const bowlingBallValue = bowlingBall * 5, rustyArtifactValue = rustyArtifact * 2, oldSwordValue = oldSword * 1, oldBootValue = oldBoot * 3, pieceOfClothingValue = pieceOfClothing * 4, sunGlassesValue = sunGlasses * 8;

                    // Reward coins for the player's bag.
                    const reward = bowlingBall + rustyArtifact + oldBoot + oldSword + pieceOfClothing + sunGlasses;

                    // Log what they're selling..
                    console.log(
                        `${bowlingBall}x Bowling Balls worth 5 coins each... +${bowlingBallValue} coins`,
                        //TODO add the rest.
                    );

            break;
            default:
                console.log("Command not recognized.");
        }
    }

}
