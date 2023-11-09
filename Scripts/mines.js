import { fieldSize, setFieldSize } from "./gameStart.js";
import { rows } from "./main.js";

let minefield = createEmptyMinefield();
export { minefield };

function createEmptyMinefield() {
    let mines = [];
    for (let indexRow = 0; indexRow < fieldSize; indexRow++) {
        let row = [];
        for (let indexField = 0; indexField < fieldSize; indexField++) {
            row.push(false);
        }
        mines.push(row);
    }
    return mines;
}

function randomNumber(max) {
    return Math.floor(Math.random() * (max + 1))
  }

function randomPosition() {
    return [randomNumber(fieldSize - 1), randomNumber(fieldSize - 1)];
}

function alreadyTaken(position) {
    if (minefield[position[0]][position[1]] === true) {
        return true;
    } else {
        return false;
    }
}

function mineDensity() {
    return  Math.floor(Math.pow(fieldSize, 2) / 10);
}
export { mineDensity };

function addMines() {
    minefield = createEmptyMinefield();
    let counter = mineDensity();
    for (let index = 0; index < counter; index++) {
        let position = randomPosition();
        /* Check if field is already taken */
        if (alreadyTaken(position) === true) {
            counter++;
            /*console.log('addMines: FIELD ALREADY TAKEN!');*/
        } else {
            minefield[position[0]][position[1]] = true;
        }
    }
    
}
export { addMines };

function markMines() {
    for (let indexRow = 0; indexRow < fieldSize; indexRow++) {
        for (let indexField = 0; indexField < fieldSize; indexField++) {
            if (minefield[indexRow][indexField] === true) {
                rows[indexRow].childNodes[indexField].classList.add('show-mine');
            }
        }
    }
}
export { markMines };

function checkForMines(id) {
    let postition = id.split('-');
    if (minefield[postition[1]][postition[2]] === true) {
        return true;
    } else {
        return false;
    }
}
export { checkForMines };