export { buildFields };
const MINEFIELD = document.querySelector('minefield');

function buildFields(parsedNumber) {
    for (let indexRow = 0; indexRow < parsedNumber; indexRow++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let indexColumn = 0; indexColumn < parsedNumber; indexColumn++) {
            let mine = document.createElement('div');
            mine.classList.add('mine-field');
            mine.id = 'mine-' + indexRow + '-' + indexColumn;
            row.appendChild(mine);
        }
        MINEFIELD.appendChild(row);
    }
}