let randomNumber=parseInt(Math.random() * 100 + 1);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrhi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

//to validate the value i.e. it should be a no b/w 1-100
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid no')
    }
    else if(guess<1){
        alert('Please enter a no more than 1')
    }
    else if(guess>100){
        alert('Please enter a no less than 100')
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random No was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess);
        }
    }
}

//to check the guess if it is equal or not
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed correctly. Random no is: ${randomNumber}`)
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage('The number is too low')
    }
    else if(guess>randomNumber){
        displayMessage('The number is too high')
    }
}

//to display guess
function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

//to display the message 
function displayMessage(message){
    lowOrhi.innerHTML=`<h2>${message}</h2>`
}

//to end the game
function endGame(){
    userInput.value='' //cleaning all previous value
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id='newGame'>Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

//to start a new game
function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random() * 100 + 1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11- numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    });
}