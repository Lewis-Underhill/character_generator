const fs = require('fs');

// Function to import .txt file as an array
const arrayImport = textFile => {
    let items = fs.readFileSync(textFile, 'utf-8').split('\n');
    return items;
}

// Function to return a random item from the input array
const rand = array => {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

// Arrays of character name attributes
const mTitles = arrayImport('arrays/maletitles.txt');
const fTitles = arrayImport('arrays/femaletitles.txt');
const mFirstNames = arrayImport('arrays/malefirstnames.txt');
const fFirstNames = arrayImport('arrays/femalefirstnames.txt');
const surnames = arrayImport('arrays/surnames.txt');
const accolades = arrayImport('arrays/accolades.txt');
const places = arrayImport('arrays/places.txt');

// Generate name (and title)
const generateName = () => {
    
    // Choose 1 of 2 options at random
    const binaryChoice = (option1, option2) => {
        if (Math.random() < 0.5) {
            return option1;
        } else {
            return option2;
        }
    }

    // Determine character gender
    const gender = binaryChoice('male', 'female');

    // Determine whether to add a title
    const title = binaryChoice(true, false);

    // Determine number of names before last name
    const nameNumber = () => {
        let d100 = Math.floor(Math.random() * 100);

        if (d100 < 65) {
            return 1;
        } else if (d100 < 90) {
            return 2;
        } else if (d100 < 92) {
            return 3;
        } else if (d100 < 94) {
            return 4;
        } else if (d100 < 96) {
            return 5;
        } else if (d100 < 97) {
            return 6;
        } else if (d100 < 98) {
            return 7;
        } else if (d100 < 99) {
            return 8;
        } else if (d100 >= 99) {
            return 9;
        }                
    }

    // Choose first name(s) and title if relevant
    let name1 = '';
    
    if (gender === 'male') {

        if (title) {
            name1 += rand(mTitles) + ' ';
        }

        for (let i = 0; i < nameNumber(); i++) {
            name1 += rand(mFirstNames) + ' ';
        }

    } else {

        if (title) {
            name1 += rand(fTitles) + ' ';
        }

        for (let i = 0; i < nameNumber(); i++) {
            name1 += rand(fFirstNames) + ' ';
        }
    }

    //Choose surname
    let name2 = rand(surnames);
    
    return name1 + name2;
}

// Print formatted message to console
const generateMessage = () => {
    //console.log(`${generateName()}, ${rand(accolades)} of ${rand(places)}`);
    console.log(`Name: ${generateName()}`);
    console.log(`Class: ${rand(accolades)}`);
    console.log(`Origin: ${rand(places)}`);
};

generateMessage();