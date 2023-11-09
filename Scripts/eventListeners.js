import { addNumbers } from "./numbers.js";
import { checkWin } from "./checkWin.js";
import { checkForMines, markMines } from "./mines.js";
import { endTimer } from "./main.js";
let gameActive = true;

function timeOut() {
    endTimer();
    const timer = document.getElementById('timer');
    const timerClock = document.getElementById('timer-clock');
    timer.style.justifyContent = 'flex-end';
    timerClock.style.display = 'none';
    gameActive = false;
    alert('TIME\'S OUT! You lose!');
    markMines();
    return;
}
export { timeOut };

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
            endTimer();
            markMines();
            return;
        }
        e.target.classList.add('opened');
        addNumbers();
    }

    if (checkWin() === true) {
        gameActive = false;
        alert('CONGRATULATIONS! YOU WON!');
        endTimer();
        markMines();
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

    if (checkWin() === true) {
        gameActive = false;
        alert('CONGRATULATIONS! YOU WON!');
        endTimer();
        markMines();
    }
});