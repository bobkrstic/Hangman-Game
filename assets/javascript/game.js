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




function startGame() 
{
	var wordBank = ["scope", "globe", "parents", "carpet", "mouse", "america", "thailand", "snakes", "shelves", "cooling", "museum"];
	var chosenLetters = [];
	var linesWord = [];
	var wins = 0;
	var lives = 10;
	var matchFound;
	// var a;
	// var b;
	

    // computer choses random word out of our array of words
	// our array of different words is wordBank[]
	var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	// a = randWord.toString();
	console.log(randWord);

		// when the word is chosen, count the number of letters in it
		// then put that many lines below the word that is hidden	   
		linesWord.length = randWord.length;
    	for (var j=0; j<linesWord.length; j++) {
    	   linesWord[j] = "_";
		}

	//display number of lines/number of letters in the word
	document.querySelector("#linesWORD").innerHTML = linesWord;


// while (a !== b) {
	//document.onkeyup = function(event) 
	function myGame()
	{
		// get user's input ands store it in the userGuess variable
		var userGuess = event.key;

		// display the random word
	    document.querySelector("#wordToGuess").innerHTML = randWord;
			

		// iterate through the array that the computer randomly chose
		// and compare to check if the letter chosen by user is in the word. 
			matchFound = 0; 

			for (var i = 0; i < randWord.length; i++) {

				if (userGuess == randWord[i]) {
					linesWord[i] = userGuess;
					matchFound = matchFound + 1;
				}
		    }

			// check the array of chosen letters if user already chose
			// the letter. Set match found to 1
			for (var s = 0; s < chosenLetters.length; s++) {
				if (userGuess == chosenLetters[s]) {
					matchFound = matchFound + 1;
				}
			}


			

			// add the chosen letter to the chosenLetters array
			chosenLetters.push(userGuess);

			// if no match letter found, deduct lives by one.
			if (matchFound == 0) {
				lives = lives - 1;	
			} 


			// a = [randWord].toString();
			// b = [linesWord].toString();

			// console.log("This is randWord " + a);
			// console.log("This is linesWord " + b);


			if (randWord === linesWord) {
				wins = wins + 1;
				alert("You won");
				alert("Press any key to start again.");
				// console.log(a===b);
			}


			// present to the user the chosenLetters array
			document.querySelector("#chosenLetters").innerHTML = chosenLetters;

			// update guessed letters to the user to see what is left to guess
			document.querySelector("#linesWORD").innerHTML = linesWord;

			// display remaining lives
			document.querySelector("#livesRemaining").innerHTML = lives;

			// display number of wins
			document.querySelector("#numberOfWIns").innerHTML = wins;

			if (lives == 0) {
				alert("You lost");
				alert("Press any key to start again.");
				//location.reload();
				startGame();
			}
			
			
	};


	document.onkeyup = myGame;

// 	b = linesWord.toString();
// }
};



document.onkeyup = startGame;



