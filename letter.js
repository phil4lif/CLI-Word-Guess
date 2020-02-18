var inquirer = require("inquirer");
//Write a constructor Letter that will display a letter if it has been guessed
//or a blank placeholder for each unguessed letter
function Letter(name){
    this.name = name;
    this.isGuessed = function() {
        if (name == name){
            return true;
        }
    }
    this.display = function() {
        if (isGuessed = true){
            //show the letter in it's correct space
        }else{
            //display the blanks spaces 
        }

    }
}
var randomWord = ["javascript", "materialize", "node", "bootstrap",]
function wordGen(){
    var word = randomWord[Math.floor(Math.random() * randomWord.length)].toLowerCase();
    console.log(word);
}
wordGen()
