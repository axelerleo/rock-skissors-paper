
"use strict";

function computerPlay() {

	let random = Math.floor((Math.random() * 3) + 1);

	switch(random) {

		case 1:

			return "rock";

			break;

		case 2:

			return "paper";

			break;

		case 3:

			return "scissors";

			break;

	}

}



function outputSelection(selection, gamer) {

	let result = document.querySelector(`.${gamer}-choice`);

	result.textContent = capitalizeFirstLetter(selection);

}



function outputResult(winner,playerChoice, computerChoice) {

	let result = document.querySelector('.result');

	let details = document.querySelector('.details');

	let pscore = document.querySelector('.player-score').textContent;

	pscore++ ;

	result.style.color = 'black';

	switch(winner) {

		case 'player':

			result.style.color = 'green';

			result.textContent = "You win! :)";

			details.textContent = `Your ${playerChoice} has beaten computer's ${computerChoice}`;

			document.querySelector('.player-score').textContent++;

			break;

		case 'computer':

			result.style.color = 'red';

			result.textContent = "You loose! :(";

			details.textContent = `Your ${playerChoice} has lost to computer's ${computerChoice}`;

			document.querySelector('.computer-score').textContent++;

			break;

		default:

			result.textContent = "Draw!"

			details.textContent = `You both have chosen ${computerChoice}`;

	}

}



function capitalizeFirstLetter(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);

}



function playRound(playerSelection, computerSelection) {

	let playerSelectionLower = playerSelection.toLowerCase();

	outputSelection(playerSelectionLower, "p");

	outputSelection(computerSelection, "c");

	if( (playerSelectionLower == "rock" && computerSelection == "scissors") || 

		(playerSelectionLower == "paper" && computerSelection == "rock") ||

		(playerSelectionLower == "scissors" && computerSelection == "paper")) {

		outputResult('player',playerSelectionLower, computerSelection);

	}

	else if (playerSelectionLower == computerSelection)

		outputResult('draw',playerSelectionLower, computerSelection);

	else {

		outputResult('computer',playerSelectionLower, computerSelection);

	}

} 



const buttons = document.querySelectorAll('button');

buttons.forEach((button) => { 

  button.addEventListener('click', (e) => { 

	let choice = button.textContent;

	playRound(choice ,computerPlay());

  });

});