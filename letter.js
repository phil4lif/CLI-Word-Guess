//Write a constructor Letter that will display a letter if it has been guessed
//or a blank placeholder for each unguessed letter
function Letter(name){
    //the place where the underlying character is stored
    this.name = name;
    this.isGuessed = false
    this.checkGuess = function() {
        if (guess === this.name){
            this.isGuessed = true;
            console.log(isGuessed);
        }
    }
    this.display = function() {
        if (this.name === " "){
            this.isGuessed = true;
            return " ";
            //show the letter in it's correct space
        }else{
            //display the blanks space
            return this.name;
        }

    }
}
module.exports = Letter