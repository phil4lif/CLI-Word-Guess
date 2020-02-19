var Letter = require("./letter")

function Word(word){
    this.word = word,
    this.makeLetters = function(){
    var letters = this.word.split("");
    for (var i = 0; i<letters.length; i++){
    var newLetters = new Letter(letters[i]);
    console.log(letters)
    }
    }
}
module.exports = Word
module.exports = Letter