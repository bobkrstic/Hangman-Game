// game starts after the user presses any key
// the computer chooses the random word
// user presses the key/letter
// record the letter that was chosen




// compare the word with the letter, 
// check if there is a letter in that word

// if there is: replace the line in the html file with it
	// deactivate that key so it does not click again
// if there is not: lives - 1
	// deactivate that key same way

// if user spends all lives and not guesses the word
// display you lost
// start the game again

// if the user guesses the word before runs out of lives
// display you won
// wins + 1
// start game again.

var wordBank = ["scope", "globe", "parent", "carpet", "mouse"];
var chosenLetters = [];



    // computer choses random word out of our array of words
	// our array of different words is wordBank[]
	var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
     // randWord.split('');
	console.log(randWord);
	




var wins = 0;

document.onkeyup = function(event) 
{
	var userGuess = event.key;
	console.log(event.key);
document.querySelector("#wordToGuess").innerHTML = randWord;
	// iterate through the array that the computer randomly chose
	// and compare to check if the letter chosen by user is in the word. 
	for (var i = 0; i < randWord.length; i++) {
		console.log(randWord[i]);
	
		if (userGuess == randWord[i]) {
			console.log("There is a letter like that");
		} else {
			console.log("There's no letter");
		}
	}

		// here we start and array of chosen letters and update
		// each time user presses the key. Also display on the screen. 
	    chosenLetters.push(userGuess);
		document.querySelector("#chosenLetters").innerHTML = chosenLetters;
		console.log(chosenLetters);
	
}