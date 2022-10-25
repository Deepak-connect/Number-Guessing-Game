let secretNumber = Math.floor(Math.random()*20)+1;
let attempts = 10;
let currentScore = 20;
let highestScore = 0;

let input = document.getElementById('input');
let checkBtn = document.getElementById('check');

let attemptsElement = document.getElementById('attempts');
let gameMessage = document.getElementById('game-message');
let ansBox = document.getElementById('ans-box');
let body = document.querySelector('body');
let currentScoreElement = document.getElementById('current-score');
let highestScoreElement = document.getElementById('highest-score');
let newGame = document.getElementById('new-game');

//on clicking check button
checkBtn.addEventListener('click', function(){
    let userInput = input.value;
    attempts--;
    currentScore--;
    if(userInput>0 && userInput<=20){
        if(attempts>0){
            if(userInput == secretNumber){
                gameMessage.textContent = `Correct guess!`;
                attemptsElement.textContent = attempts;
                ansBox.textContent = `${userInput}`;
                currentScoreElement.textContent = currentScore+1;
                body.style.backgroundColor = "green";

                highestScore = currentScore > highestScore ? currentScore : highestScore;
                highestScoreElement.textContent = highestScore+1;
                
            }
            else{    
                attemptsElement.textContent = attempts;
                if(userInput<secretNumber){
                    gameMessage.textContent = `Incorrect guess! Try number larger than ${userInput}`;
                    currentScoreElement.textContent = currentScore;
                    attemptsElement.textContent = attempts;
                    body.style.backgroundColor = "red";
                    setTimeout(() => {
                        body.style.backgroundColor = "black";
                    }, 200);
                }
                else if(userInput>secretNumber){
                    gameMessage.textContent = `Incorrect guess! Try number smaller than ${userInput}`;
                    currentScoreElement.textContent = currentScore;
                    attemptsElement.textContent = attempts;
                    body.style.backgroundColor = "red";
                    setTimeout(() => {
                        body.style.backgroundColor = "black";
                    }, 200);
                }
            }   
        }
        else{
            console.log("You Lost")
            
        }
    } 
    else{
        gameMessage.textContent = `Enter Number Between 1-20`;
        attemptsElement.textContent = attempts;
        currentScoreElement.textContent = currentScore;
    }
    

})


//on clicking New Game button, reset all values, except Highest Score
newGame.addEventListener('click', ()=>{
    body.style.backgroundColor = "black";
    attempts = 10;
    attemptsElement.textContent = attempts;
    currentScore = 20;
    currentScoreElement.textContent = currentScore;
    input.value = '';
    secretNumber = Math.floor(Math.random()*20)+1;
    ansBox.textContent = "?";
    gameMessage.textContent= "Guess a number between 1-20";

})
