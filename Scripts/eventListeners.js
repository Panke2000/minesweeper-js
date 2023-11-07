import { addNumbers } from "./numbers.js";
import { checkWin } from "./checkWin.js";
import { checkForMines } from "./mines.js";
let gameActive = true;

document.addEventListener('click', (e) => {
    if (gameActive === false) {
        return;
    }

    if (e.target.className.includes('mine-field') && 
        !(e.target.className.includes('opened'))) {
        if (checkForMines(e.target.id)) {
            gameActive = false;
            e.target.classList.add('explode');
            console.log('MINE EXPLODED!');
            alert('OUCH, YOU STEPPED ON A MINE!');
            return;
        }
        e.target.classList.add('opened');
        addNumbers();
    } else {
        return;
    }
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if (gameActive === false) {
        return;
    }

    if (e.target.className.includes('mine-field') && 
        !(e.target.className.includes('opened'))) {
        e.target.classList.toggle('flag');
        checkWin();
    } else {
        return;
    }
});