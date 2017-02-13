var inquirer = require('inquirer')
var Word = require('./Word.js');

var animals = ['dog', 'cat', 'parrot', 'hamster', 'fish'];

var wordToPlay = animals[Math.floor(Math.random()*animals.length)];

var wordObject = new Word(wordToPlay);
wordObject.makeAndPushLettersIntoWord();
console.log(wordObject.display());

function askLetter(){
    inquirer.prompt([
    {
    type: "input",
    name: "guess",
    message: "What letter do you guess? To restart game type 'resart'"},
    ]).then(function(data){
        if (data.guess != 'restart') {
            wordObject.updateLetter(data.guess);

            console.log(wordObject.display());

            askLetter();
        }


    });
}

askLetter();