var Letter = require("./Letter.js");

function Word(string) {
    this.letterArr = [];
    this.numRevealed = 0;
    this.set = function() {
        for (i=0;i<string.length;i++) {
            var letter = new Letter(string[i], false);
            this.letterArr.push(letter);
        }
    };
    this.guess = function(char) {
        this.numRevealed = 0;
        for (i=0;i<this.letterArr.length;i++) {
            this.letterArr[i].check(char);
            if (this.letterArr[i].revealed === true) {
                this.numRevealed++;
            }
        }
    };
    this.display = function() {
        var string = "";
        for (i=0;i<this.letterArr.length;i++) {
            string = string + this.letterArr[i].update();
        }
        console.log(string);
    }
}

module.exports = Word;