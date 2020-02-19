var Letter = require("./letter")
function Word(word){
    this.wordArr = [],

    this.makeLetters = function(){
    var letters = this.word.split("");
    // console.log(letters)
    for (var i = 0; i<letters.length; i++){
    var newLetter = new Letter(letters[i]);
    }
    console.log(letters)

    }
    this.userGuess = function(input){
        for(var i = 0; i<this.wordArr.length; i++){
            this.wordArr[i].guess(input)
        }
    }
}
// newWord.makeLetters();
module.exports = Word
module.exports = Letter