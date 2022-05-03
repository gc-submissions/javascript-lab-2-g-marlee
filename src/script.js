"use strict";

let randomDamage = () => {
    return(Math.floor(Math.random() * 10) +1);
}

let chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2)
    if (randNum === 0) {
        return opt1;
    } else {
        return opt2;
    }
}

function attackPlayer(health) {
    return(health - randomDamage());
}

let logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}

let logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}

let isDead = (health) => {
    if (health <= 0) {
        return true;
    } else {
        return false;
    }
}

function fight(player1, player2, player1Health, player2Health) {
    while(true) {
        let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health) === true) {
                logDeath(player1, player2);
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health) === true) {
                logDeath(player2, player1)
                break;
            }
        }
    }
}

fight("Godzilla", "King Kong", 100, 100);


// extended challenges
function printSquare(width) {
    
    for (let i = 0; i < width; i++) {
        let string = ""
        for (let b = 0; b < width; b++) {
            string += "#"
        }
        console.log(string);
    }
}

printSquare(4);