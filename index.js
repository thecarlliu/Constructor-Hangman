var inquirer = require("inquirer");
var Word = require("./Word.js");

var currentWord;
var numGuesses = 7;

//list of words - Game of Thrones themed
var wordsArr = ["crow","khaleesi","maester","meereenese knot", "milk of the poppy", "pyromancer", "raven", "red wedding", "the second sons", "the seven", "the unsullied", "valyrian", "the wall", "warg", "white walkers", "wildfire", "wilding"];

//var wordsArr = ["white walkers"]; //for testing

//Randomly selects a word from our wordsArr
function setWord() {
    var random = Math.floor(Math.random()*Math.floor(wordsArr.length));
    currentWord = new Word(wordsArr[random]);
    currentWord.set();
}

var playGame = function() {
    if (currentWord.numRevealed < currentWord.letterArr.length && numGuesses > 0) {
        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "Guess a letter!"
            }
        ]).then(function(answers) {
            var prevNumRevealed = currentWord.numRevealed;
            currentWord.guess(answers.guess);
            var newNumRevealed = currentWord.numRevealed;
            currentWord.display();
            if (prevNumRevealed === newNumRevealed) {
                numGuesses--;
                console.log("Bad choice! You have "+numGuesses+" guesses left!");
            }
            else if (prevNumRevealed < newNumRevealed) {
                console.log("Your guess was correct!");
            }
            playGame();
        });
    }
    else if (currentWord.numRevealed < currentWord.letterArr.length && numGuesses === 0) {
        console.log("You know nothing! Try again!");
        setWord();
        numGuesses = 7;
        currentWord.display();
        playGame();
    }
    else if (currentWord.numRevealed === currentWord.letterArr.length && numGuesses > 0) {
        console.log("You are the mother of dragons,\nbreaker of chains,\nguesser of words! Play again!");
        setWord();
        numGuesses = 7;
        currentWord.display();
        playGame();
    }
};

setWord();
currentWord.display();
playGame();






