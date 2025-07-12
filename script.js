const num=parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const input =document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowORhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let num = parseInt(Math.random() * 100 + 1); // Use let instead of const
const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowORhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previous = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value); // Change userInput to input
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
    // Check whether input is a valid value between 1 and 100
    if (isNaN(guess)) {
        alert('Please enter a valid value');
    } else if (guess < 1 || guess > 100) {
        alert('Please enter a valid value');
    } else {
        previous.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game over, random no. was ${num}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
  if (guess === num) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < num) {
    displayMessage(`No. is low`);
  } else if (guess > num) {
    displayMessage(`No. is high`);
  }
}

function displayGuess(guess) {
  input.value = ''; 
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowORhigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    num = parseInt(Math.random() * 100 + 1); // Reassign num with let
    previous = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    input.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  input.value = ''; // Clear input field correctly
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

const p = document.createElement('p')

let previous=[]
let numGuess=1

let playGame=true

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
    //check wheather input is a correct value between 1 and 100
    if(isNaN(guess)){
        alert('please enter a valid value')
    }else if(guess<1)
         alert('please enter a valid value')
     else if(guess>100)
        alert('please enter a valid value')
    else {
    previous.push(guess);
    if(numGuess===11){
        displayGuess(guess)
        displayMessage(`Game over , random no. was ${num}`)
        endGame()
    }
    else{
          displayGuess(guess)
          checkGuess(guess)
        }
    }
}

function checkGuess(guess){
  if(guess===num){
    displayMessage(`you guessed it right`)
    endGame()
  }
  else if(guess<num){
    displayMessage(`no. is low`)
  }
  else if(guess>num){
    displayMessage(`no. is high`)

    } 

  }
  


function displayGuess(guess){
 input.value=''
  guessSlot.innerHTML += `${guess}, `;
 numGuess++;
 remainig.innerHTML=`${11-numGuess}`

}

function displayMessage(message){
lowORhigh.innerHTML=`<h2>${message}</h2>`
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    num = parseInt(Math.random() * 100 + 1);
    previous = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    input.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

function endGame(){
input='';
input.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
startOver.appendChild(p)
playGame=false
newGame()
}
