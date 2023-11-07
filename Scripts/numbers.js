export { addNumbers };
import { fieldSize } from "./gameStart.js";
import { rows } from "./main.js";
import { minefield } from "./mines.js";

function checkMiddle(position) {
    if (minefield[position[0]][position[1]] === true) {
        return -1;
    }
    if (minefield[position[0] - 1][position[1]] === true) {
        counter++;
    }
    if (minefield[position[0] - 1][position[1] + 1] === true) {
        counter++;
    }
    if (minefield[position[0]][position[1] + 1] === true) {
        counter++;
    }
    if (minefield[position[0] + 1][position[1] + 1] === true) {
        counter++;
    }
    if (minefield[position[0] + 1][position[1]] === true) {
        counter++;
    }
    if (minefield[position[0] + 1][position[1] - 1] === true) {
        counter++;
    }
    if (minefield[position[0]][position[1] - 1] === true) {
        counter++;
    }
    if (minefield[position[0] - 1][position[1] - 1] === true) {
        counter++;
    }
    return counter;
}

function checkTopLeft(position) {
    if (minefield[position[0]][position[1]] === true) {
        return -1;
    }
    if (minefield[position[0]][position[1] + 1] === true) {
        counter++;
    }
    if (minefield[position[0] + 1][position[1] + 1] === true) {
        counter++;
    }
    if (minefield[position[0] + 1][position[1]] === true) {
        counter++;
    }
    return counter;
}

function checkTopRight(position) {
    if (minefield[position[0]][position[1]] === true) {
        return -1;
    }
    if (minefield[position[0]][position[1] + 1] === true) {
        counter++;
    }
    if (minefield[position[0] + 1][position[1] - 1] === true) {
        counter++;
    }
    if (minefield[position[0] + 1][position[1]] === true) {
        counter++;
    }
    return counter;
}

function checkBottomLeft(position) {
    if (minefield[position[0]][position[1]] === true) {
        return -1;
    }
    if (minefield[position[0] - 1][position[1]] === true) {
        counter++;
    }
    if (minefield[position[0] - 1][position[1] + 1] === true) {
        counter++;
    }
    if (minefield[position[0]][position[1] + 1] === true) {
        counter++;
    }
    return counter;
}

function checkBottomRight(position) {
    if (minefield[position[0]][position[1]] === true) {
        return -1;
    }
    if (minefield[position[0]][position[1] - 1] === true) {
        counter++;
    }
    if (minefield[position[0] - 1][position[1] - 1] === true) {
        counter++;
    }
    if (minefield[position[0]][position[1] + 1] === true) {
        counter++;
    }
    return counter;
}

function checkTopCorner(position) {
    if (minefield[position[0]][position[1]] === true) {
        return -1;
    }
    if (minefield[position[0]][position[1] + 1] === true) {
        counter++;
    }
    if (minefield[position[0] + 1][position[1] + 1] === true) {
        counter++;
    }
    if (minefield[position[0] + 1][position[1]] === true) {
        counter++;
    }
    if (minefield[position[0] + 1][position[1] - 1] === true) {
        counter++;
    }
    if (minefield[position[0]][position[1] - 1] === true) {
        counter++;
    }
    return counter;
}

function checkBottomCorner(position) {
    if (minefield[position[0]][position[1]] === true) {
        return -1;
    }
    if (minefield[position[0]][position[1] - 1] === true) {
        counter++;
    }
    if (minefield[position[0] - 1][position[1] - 1] === true) {
        counter++;
    }
    if (minefield[position[0] - 1][position[1]] === true) {
        counter++;
    }
    if (minefield[position[0] - 1][position[1] + 1] === true) {
        counter++;
    }
    if (minefield[position[0]][position[1] + 1] === true) {
        counter++;
    }
    return counter;
}

function checkLeftCorner(position) {
    if (minefield[position[0]][position[1]] === true) {
        return -1;
    }
    if (minefield[position[0] - 1][position[1]] === true) {
        counter++;
    }
    if (minefield[position[0] - 1][position[1] + 1] === true) {
        counter++;
    }
    if (minefield[position[0]][position[1] + 1] === true) {
        counter++;
    }
    if (minefield[position[0] + 1][position[1] + 1] === true) {
        counter++;
    }
    if (minefield[position[0] + 1][position[1]] === true) {
        counter++;
    }
    return counter;
}

function checkRightCorner(position) {
    if (minefield[position[0]][position[1]] === true) {
        return -1;
    }
    if (minefield[position[0] + 1][position[1]] === true) {
        counter++;
    }
    if (minefield[position[0] + 1][position[1] - 1] === true) {
        counter++;
    }
    if (minefield[position[0]][position[1] - 1] === true) {
        counter++;
    }
    if (minefield[position[0] - 1][position[1] - 1] === true) {
        counter++;
    }
    if (minefield[position[0] - 1][position[1]] === true) {
        counter++;
    }
    return counter;
}

function checkMinesAround(position) {
    let counter = 0;

    //middle
    if (position[0] !== 0 && position[0] !== (fieldSize - 1) && 
        position[1] !== 0 && position[1] !== (fieldSize - 1)) {
        return checkMiddle(position);
    }

    //top-left
    if (position[0] === 0 && position[1] === 0) {
        return checkTopLeft(position);
    }

    //top-right
    if (position[0] === 0 && position[1] === (fieldSize - 1)) {
        return checkTopRight(position);
    }
    
    //bottom-left
    if (position[0] === (fieldSize - 1) && position[1] === 0) {
        return checkBottomLeft(position);
    }

    //bottom-right
    if (position[0] === (fieldSize - 1) && position[1] === (fieldSize - 1)) {
        return checkBottomRight(position);
    }

    //top-corner
    if (position[0] === 0 && 
        position[1] !== 0 && position[1] !== (fieldSize - 1)) {
        return checkTopCorner(position);
    }

    //bottom-corner
    if (position[0] === (fieldSize - 1) && 
        position[1] !== 0 && position[1] !== (fieldSize - 1)) {
        return checkBottomCorner(position);
    }

    //left-corner
    if (position[1] === 0 && 
        position[0] !== 0 && position[0] !== (fieldSize - 1)) {
        return checkLeftCorner(position);
    }

    //right-corner
    if (position[1] === (fieldSize - 1) && 
        position[0] !== 0 && position[0] !== (fieldSize - 1)) {
        return checkRightCorner(position);
    }

}

function addColor(number) {
    switch (number) {
        case 1:
            return 'number-1';
            break;
        case 2:
            return 'number-2';
            break;
        case 3:
            return 'number-3';
            break;
        case 4:
            return 'number-4';
            break;
        case 5:
            return 'number-5';
            break;
        case 6:
            return 'number-6';
            break;
        case 7:
            return 'number-7';
            break;
        case 8:
            return 'number-8';
            break;
    
        default:
            break;
    }
}

function addNumbers() {
    for (let indexRow = 0; indexRow < fieldSize; indexRow++) {
        for (let indexField = 0; indexField < fieldSize; indexField++) {
            const MINES_AROUND = checkMinesAround([indexRow, indexField]);
            const FIELD = rows[indexRow].childNodes[indexField];
            if (MINES_AROUND !== -1 && MINES_AROUND !== 0 && FIELD.className.includes('opened')) {
                FIELD.classList.add(addColor(MINES_AROUND));
                FIELD.innerHTML = MINES_AROUND;
            } else {
                FIELD.innerHTML = '';
            }
        }
    }
}