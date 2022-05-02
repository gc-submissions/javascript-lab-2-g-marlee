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
