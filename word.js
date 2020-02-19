var Letter = require("./letter")
function Word(word){
    this.word = word,

    this.makeLetters = function(){
    var letters = this.word.split("");
    // console.log(letters)
    for (var i = 0; i<letters.length; i++){
    var newLetter = new Letter(letters[i]);
    }
    console.log(letters)

    }
}
// newWord.makeLetters();
module.exports = Word
module.exports = Letter