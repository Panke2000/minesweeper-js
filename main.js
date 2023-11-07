export { rows };
import { fieldSize, setFieldSize } from "./gameStart.js";
import { buildFields } from "./buildFields.js";
import { addMines, markMines ,minefield } from "./mines.js";
let fields = [];


function startGame(fieldSize) {
    buildFields(fieldSize);
  
}

setFieldSize(startGame);


let rows = document.querySelectorAll('.row');
    console.log(rows);

for (let indexRow = 0; indexRow < fieldSize; indexRow++) {
    let fieldRow = rows[indexRow].childNodes;
    fields.push(fieldRow);
    /*for (let indexField = 0; indexField < rows[indexRow].childElementCount; indexField++) {
        console.log(fieldRow[indexField]);
    }*/
}

console.log(fields);

addMines();
markMines();

