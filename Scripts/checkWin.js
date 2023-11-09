import { minefield, mineDensity } from "./mines.js";
import { fields } from "./main.js";

function openAllEmptyFields() {
    for (let indexRow = 0; indexRow < minefield.length; indexRow++) {
        for (let indexField = 0; indexField < minefield.length; indexField++) {
            if (minefield[indexRow][indexField] === false) {
                if (!fields[indexRow][indexField].className.includes('opened')) {
                    fields[indexRow][indexField].classList.add('opened');
                }
            }
        }
    }
}
export { openAllEmptyFields };

function checkWin() {
    const flaggedFields = document.querySelectorAll('.flag');
    /* Checks if all other fields are oppened */
    for (let indexRow = 0; indexRow < minefield.length; indexRow++) {
        for (let indexField = 0; indexField < minefield.length; indexField++) {
            if (minefield[indexRow][indexField] === false) {
                if (!fields[indexRow][indexField].className.includes('opened')) {
                    return false;
                }
            }
        }
    }
    /* Checks if flagged field doesn't contain a mine */
    let flagCounter = 0;
    flaggedFields.forEach(field => {
        let postition = [field.id.split('-')[1], field.id.split('-')[2]];
        if (minefield[postition] === false) {
            return false;
        }
        flagCounter++;
    });
    /* Checks if all mine fields are flagged */
    if (flagCounter != mineDensity()) {
        return false;
    }

    /* If all previous checks are passed, it's a win */
    return true;
}
export { checkWin }