var Letter = require("./Letter.js");

function Word(string) {
    this.letterArr = [];
    this.display = function() {
        for (i=0;i<string.length;i++) {
            var letter = new Letter(string[i], false);
            this.letterArr.push(letter);
        }
        this.letterArr.toString();
    };
    this.guess = function(char) {
        for (i=0;i<this.letterArr.length;i++) {
            this.letterArr[i].check(char);
        }
    };
}