var inquirer = require("inquirer");
var Word = require("./Word.js");

var currentWord;
var numGuesses = 7;

//list of words - Game of Thrones themed
//var wordsArr = ["crow","khaleesi","maester","meereenese knot", "milk of the poppy", "pyromancer", "raven", "red wedding", "the second sons", "the seven", "the unsullied", "valyrian", "the wall", "warg", "white walkers", "wildfire", "wilding"];

var wordsArr = ["white walkers"]; //for testing

//Randomly selects a word from our wordsArr
function setWord() {
    var random = Math.floor(Math.random()*Math.floor(wordsArr.length));
    currentWord = new Word(wordsArr[random]);
    currentWord.set();
}

var playGame = function() {
    if (currentWord.numRevealed < currentWord.letterArr.length && numGuesses > 0) {
        inquirer.prompt([
            // {
            //     type: "confirm",
            //     name: "welcome",
            //     message: "Welcome to Constructor-Hangman: Game of Thrones Edition. Would you like to play?"
            // },
            {
                type: "input",
                name: "guess",
                message: "Guess a letter!"
            }
        ]).then(function(answers) {
            currentWord.guess(answers.guess);
            currentWord.display();
            playGame();
        });
    }
    else {
        setWord();
        currentWord.display();
        playGame();
    }
    //condition for numGuesses-- is: if prevNumRevealed is the same as numRevealed, need to make that class variable.
    //add else if condition for if numGuesses runs out,
    //if game is won, what to say.
};

setWord();
currentWord.display();
playGame();






