var Word = require("./Word.js");

var currentWord;

//list of words - Game of Thrones themed
var wordsArr = ["crow","khaleesi","maester","meereenese knot", "milk of the poppy", "pyromancer", "raven", "red wedding", "the second sons", "the seven", "the unsullied", "valyrian", "the wall", "warg", "white walkers", "wildfire", "wilding"];

//Randomly selects a word from our wordsArr
function setWord() {
    var random = Math.floor(Math.random()*Math.floor(wordArr.length));
    currentWord = new Word(wordsArr[random]);
}
