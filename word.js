var Letter = require("./letter")

function Word(word, arrayboard, wrongGuess, guessesLeft) {

   this.wrongGuess = wrongGuess;
   console.log(guessesLeft)
    this.guessesLeft=guessesLeft;
    this.letterArr = arrayboard;


    this.word = word;
    console.log(this.word)
    // // console.log(word.length)
    // for (var i = 0; i < word.length; i++) {
    //     var newLetter = new Letter(word[i]);
    //     // console.log(newLetter)
    // }
    this.display = function (chosenWord) {
        var display = "";
        if (this.letterArr.length === 0) {
            for (var i = 0; i < chosenWord.length; i++) {
                this.letterArr.push("_")
            }
        }

        console.log(this.letterArr.join(" "));
    };



    this.userGuess = function (guess) {

        var chosenWordArr = this.word.split("");
        // console.log(chosenWordArr)
        // console.log(guess)
        for (var i = 0; i < chosenWordArr.length; i++) {
            if (chosenWordArr[i] === guess) {
                this.letterArr[i] = guess
            }
        }

        if(this.letterArr.indexOf("_")===-1){
            console.log("YOU WON")
        }
       
        if(chosenWordArr.indexOf(guess)===-1){
            if(this.wrongGuess.indexOf(guess)===-1){
                this.guessesLeft--;
                console.log("remaining Guesses: " + this.guessesLeft)
                wrongGuess.push(guess);
                console.log(wrongGuess.join(","))
            }
        }

        if(this.guessesLeft === 0){
            console.log("game over")
            return this.guessesLeft;
        }
        // console.log(this.letterArr);
        return  this.guessesLeft;
    }
}
// newWord.makeLetters();
module.exports = Word