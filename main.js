const fs = require('fs');

// Function to import .txt file as an array
const arrayImport = textFile => {
    let items = fs.readFileSync(textFile).toString('utf-8').split('\n');
    return items;
}

// Arrays of character name attributes
const mTitles = arrayImport('arrays/maletitles.txt');
const fTitles = arrayImport('arrays/femaletitles.txt');
const mFirstNames = arrayImport('arrays/malefirstnames.txt');
const fFirstNames = arrayImport('arrays/femalefirstnames.txt');
const surnames = arrayImport('arrays/surnames.txt');
const accolades = arrayImport('arrays/accolades.txt');
const places = arrayImport('arrays/places.txt');

// Function to return a random item from the input array
const rand = array => {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}


console.log(rand(mTitles));
console.log(rand(fTitles));
console.log(rand(mFirstNames));
console.log(rand(fFirstNames));
console.log(rand(surnames));
console.log(rand(accolades));
console.log(rand(places));