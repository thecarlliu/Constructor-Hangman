function Letter (char, boolean) {
    this.char = char;
    this.revealed = boolean;
    this.update = function() {
        if (this.char === " ") {
            this.revealed = true;
            return this.char;
        }
        else {
            if (this.revealed === true) {
                return this.char;
            }
            else {
                return "_";
            }
        }

    };
    this.check = function(char) {
        if (char === this.char) {
            this.revealed = true;
        }
    };
}

module.exports = Letter;