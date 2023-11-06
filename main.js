export {fields};

function randomNumber() { // min and max included 
    return Math.floor(Math.random() * (14 + 1) + 0)
};

let all_fields = document.querySelectorAll('input');
console.log(all_fields);

let fields = [];

for (let i = 0; i < 15; i++) {
    fields[i] = [];
    for (let j = 0; j < 15; j++) {
        fields[i][j] = undefined;
    }
}

let index = 0
for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
        fields[i][j] = all_fields[index];
        index++;
    }
}
console.log(fields);

let mines = [];

for (let i = 0; i < 15; i++) {
    mines[i] = [];
    for (let j = 0; j < 15; j++) {
        mines[i][j] = false;
    }
}
console.log(mines);

let numberOfMines = 22;
for (let index = 0; index < numberOfMines; index++) {
    let i = randomNumber();
    let j = randomNumber();
    if (mines[i][j] === true) {
        console.log('matched at index: ' + index);
        numberOfMines++;
    } else {
        mines[i][j] = true;
    }
}
console.log(mines);

let mineCounter = 0;
for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
        if (mines[i][j] === true) {
            fields[i][j].classList.toggle('explode');
            mineCounter++;
        }
    }
}


console.log(mineCounter);

function checkField(i, j) {
    fields[i][j].classList.toggle('mark');
};