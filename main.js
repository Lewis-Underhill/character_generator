const fs = require('fs');

// Function to import .txt file as an array
const arrayImport = textFile => {
    let items = fs.readFileSync(textFile).toString('utf-8').split('\n');
    return items;
}

const test = arrayImport('arrays/test.txt');
console.log(test);