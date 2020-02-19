var Word = require("./word");
var inquirer = require("inquirer");
var Letter = require("./letter");
//an array of words for the wordGen function to select from
var randomWord = ["javascript", "materialize", "node", "bootstrap", "firebase"]
//the function to select a randomWord index
function wordGen(){
    var word = randomWord[Math.floor(Math.random() * randomWord.length)].toLowerCase();
    // console.log(word);
    var newWord = new Word(word);
    console.log(newWord)
    // var letters = word.split("")
    // newWord.makeLetters();
    // Letters.display
}
//invoke the wordGen function
wordGen()




//prompts the player for a guess
inquirer.prompt([
    {
    name: "guess",
    message: "Guess a Letter"
    }
])
.then(function(answer) {
    var newGuess = answer;
    
    Letter.checkGuess(newGuess);
})

