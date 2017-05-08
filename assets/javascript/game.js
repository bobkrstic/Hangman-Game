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

var wordBank = ["scocpe", "gloobe", "parernt", "crarpet", "moumse"];
var chosenLetters = [];
var linesWord = [];
var wins = 0;
var lives = 10;
var matchFound;

    // computer choses random word out of our array of words
	// our array of different words is wordBank[]
	var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
     // randWord.split('');
	console.log(randWord);

		// when the word is chosen, count the number of letters in it
		// then put that many lines below the word that is hidden	   
		linesWord.length = randWord.length;
    	for (var j=0; j<linesWord.length; j++) {
    	   linesWord[j] = "_";
		}

	

document.onkeyup = function(event) 
{

	var userGuess = event.key;
	//var matchFound = 0;
	//matchFound = 0;
	console.log(event.key);
    document.querySelector("#wordToGuess").innerHTML = randWord;


	document.querySelector("#linesWORD").innerHTML = linesWord;
	
	// document.querySelector("#chosenLetters").innerHTML = chosenLetters;
	console.log(linesWord);
	
		

	// iterate through the array that the computer randomly chose
	// and compare to check if the letter chosen by user is in the word. 
	
		
		matchFound = 0; 

		for (var i = 0; i < randWord.length; i++) {

			console.log(randWord[i]);
			if (userGuess == randWord[i]) {
				console.log("There is a letter like that");
				linesWord[i] = userGuess;
				console.log(linesWord);
				matchFound = matchFound + 1;
				console.log("randWord matches: " + matchFound);	
			}
	    }

		
		//matchFound = 0; 
			for (var s = 0; s < chosenLetters.length; s++) {
				//matchFound = 0; 
				if (userGuess == chosenLetters[s]) {
				matchFound = matchFound + 1;
				console.log("chosenLetters matched: " + matchFound);
				}
			}

			chosenLetters.push(userGuess);


			if (matchFound == 0) {
				lives = lives - 1;	
			}



		//chosenLetters.push(userGuess);
		document.querySelector("#chosenLetters").innerHTML = chosenLetters;
		console.log("Here goes chosenLetters: " + chosenLetters);
		console.log("HEre lives: " + lives);

		document.querySelector("#linesWORD").innerHTML = linesWord;

		document.querySelector("#livesRemaining").innerHTML = lives;
		
}












