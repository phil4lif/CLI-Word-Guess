var Word = require("./word")
var inquirer = require("inquirer");

var randomWord = ["javascript", "materialize", "node", "bootstrap", "firebase"]
function wordGen(){
    var word = randomWord[Math.floor(Math.random() * randomWord.length)].toLowerCase();
    // console.log(word);
    var letters = word.split("")
    // console.log(letters);
}
wordGen()

inquirer.prompt([
    {
    name: "guess",
    message: "Guess a Letter"
    }
])