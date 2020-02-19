var Word = require("./word");
var inquirer = require("inquirer");
var Letter = require("./letter");
//an array of words for the wordGen function to select from
var randomWord = ["javascript", "materialize", "node", "bootstrap", "firebase", "html", "ajax", "github"]
var alphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wrongGuess = [];
var rightGuess = [];
var guessesLeft = 12;
var wordComplete = [];
var chosenWord = randomWord[Math.floor(Math.random() * randomWord.length)].toLowerCase();
//the function to select a randomWord index

var newWord;
function wordGen() {

    return new Promise(function (resolve, reject) {
        // console.log(word);
        newWord = new Word(chosenWord, wordComplete, wrongGuess, guessesLeft);
        //   console.log(chosenWord)
        newWord.display(chosenWord)
        resolve()
    })
}




var askQuestion = function () {

    wordGen().then(function () {

        //prompts the player for a guess
        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "Guess a Letter"
            }
        ])
            .then(function (answer) {
                var newGuess = answer.guess;
                // if(newGuess !=)
                console.log(newGuess)
                var newGame = newWord.userGuess(newGuess)
                guessesLeft = newGame;
                if (newGame === 0) {
                    wrongGuess = [];
                    guessesLeft = 12;
                    wordComplete = [];
                    chosenWord = randomWord[Math.floor(Math.random() * randomWord.length)].toLowerCase();
                }
                // count++;
                askQuestion();

            })
    })


}

askQuestion()