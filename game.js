var inquirer = require('inquirer')
var Word = require('./Word.js');

var animals = ['dog', 'cat', 'parrot', 'hamster', 'fish', 'monkey', 'elephant'];

// randomly chooses a word to play from the array
var wordToPlay = animals[Math.floor(Math.random()*animals.length)];

// initiating how many guesses the user has
var guesses = 4;

// displays when game begins
var wordObject = new Word(wordToPlay);
wordObject.makeAndPushLettersIntoWord();
console.log("Here is your word to guess, you have 5 guesses to guess the word.");
console.log(wordObject.display());

function askLetter(){
    inquirer.prompt([
    {
    type: "input",
    name: "guess",
    message: "What letter do you guess? To restart game type 'restart'"},
    ]).then(function(data){
        if (data.guess != 'restart') {
            wordObject.updateLetter(data.guess);
            console.log("Guesses left: " + guesses);
            console.log(wordObject.display());
            guesses--;
            askLetter();

            if (guesses == 0 && Letter.found == false) {
                guesses = 5;
                wordToPlay = animals[Math.floor(Math.random()*animals.length)];
                wordObject = new Word(wordToPlay);
                wordObject.makeAndPushLettersIntoWord();
                wordObject.updateLetter(data.guess);
                console.log(" ");
                console.log("Game restarted because you ran out of guesses, here if your new word");
                console.log("Guesses left: " + guesses);
                console.log(wordObject.display());
                askLetter();
            }

        } else if (data.guess == 'restart') {
            guesses = 5;
            wordObject = new Word(animals[Math.floor(Math.random()*animals.length)])
            wordObject.makeAndPushLettersIntoWord();
            wordObject.updateLetter(data.guess);
            console.log(" ");
            console.log("Game restarted");
            console.log(guesses + " guesses left " + wordObject.display());
            askLetter();
        }


    });
}

askLetter();