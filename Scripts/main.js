export { rows, fields };
import { fieldSize, setFieldSize } from "./gameStart.js";
import { buildFields } from "./buildFields.js";
import { addMines, markMines } from "./mines.js";
import { startTime } from "./setTimer.js";
let fields = [];


function startGame(fieldSize) {
    buildFields(fieldSize);
    
}

setFieldSize(startGame);

let rows = document.querySelectorAll('.row');
for (let indexRow = 0; indexRow < fieldSize; indexRow++) {
    let fieldRow = rows[indexRow].childNodes;
    fields.push(fieldRow);
}

addMines();

/* Turns on the timer */
let timer = setInterval(startTime, 1000);
function endTimer() {
    clearInterval(timer);
};
export { endTimer };

/* TESTING */
import { openAllEmptyFields } from "./checkWin.js";
/*openAllEmptyFields();*/