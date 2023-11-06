import { buildFields } from "./buildFields.js";

let fieldSize;
let exit = false;

do {
    fieldSize = prompt('Choose a fields size (10-50): \nType [E] to exit the prompt.', '10');
    if (fieldSize === 'E' || fieldSize === 'e') {
        fieldSize = fieldSize.toUpperCase();
        exit = true;
    } else {
        fieldSize = parseInt(fieldSize, 10);
    }
} while (exit === false && isNaN(fieldSize) || fieldSize < 10 || fieldSize > 50);


console.log(fieldSize);
buildFields(fieldSize);

