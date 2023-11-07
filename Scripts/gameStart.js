export { fieldSize, setFieldSize };

let fieldSize;
let exit = false;

function setFieldSize(callback) {
    do {
        fieldSize = prompt('Choose a fields size (10-30): \nType [E] to exit the prompt.', '10');
        if (fieldSize === 'E' || fieldSize === 'e') {
            fieldSize = fieldSize.toUpperCase();
            exit = true;
        } else {
            fieldSize = parseInt(fieldSize, 10);
        }
    } while (exit === false && isNaN(fieldSize) || fieldSize < 10 || fieldSize > 30);
    console.log('Fieldsize: ' + fieldSize);
  
    callback(fieldSize);
}

  