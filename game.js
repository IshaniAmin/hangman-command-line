var inquirer = require('inquirer')
var Word = require('./Word.js');

var animals = ['dog', 'cat', 'parrot', 'hamster', 'fish', 'monkey', 'elephant'];

var wordToPlay = animals[Math.floor(Math.random()*animals.length)];

var guesses = 5;

var wordObject = new Word(wordToPlay);
wordObject.makeAndPushLettersIntoWord();
console.log(guesses + " guesses left " + wordObject.display());

function askLetter(){
    inquirer.prompt([
    {
    type: "input",
    name: "guess",
    message: "What letter do you guess? To restart game type 'restart'"},
    ]).then(function(data){
        if (data.guess != 'restart') {
            wordObject.updateLetter(data.guess);
            console.log(guesses + " guesses left " + wordObject.display());
            guesses--;
            askLetter();
        } else if (data.guess == 'restart') {
            guesses = 5;
            wordObject = new Word(animals[Math.floor(Math.random()*animals.length)])
            wordObject.makeAndPushLettersIntoWord();
            wordObject.updateLetter(data.guess);
            console.log(guesses + " guesses left " + wordObject.display());
            askLetter();
        }

        if (guesses == 0) {
            guesses = 5;
            wordObject = new Word(animals[Math.floor(Math.random()*animals.length)])
            wordObject.makeAndPushLettersIntoWord();
            wordObject.updateLetter(data.guess);
            console.log(guesses + " guesses left " + wordObject.display());
            askLetter();
        }


    });
}

askLetter();