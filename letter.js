var inquirer = require("inquirer");
//Write a constructor Letter that will display a letter if it has been guessed
//or a blank placeholder for each unguessed letter
function Letter(name){
    //the place where the underlying character is stored
    this.name = name;
    this.isGuessed = false
    this.checkGuess = function() {
        if (name === name){
            isGuessed = true;
        }
    }
    this.display = function() {
        if (isGuessed = true){
            //show the letter in it's correct space
        }else{
            //display the blanks space
        }

    }
}



module.exports = Letter
module.exports = inquirer