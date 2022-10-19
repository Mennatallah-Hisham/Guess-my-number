'use strict';
const msgEl=document.querySelector(".message");
const numberEl=document.querySelector(".number");
const scoreEl=document.querySelector('.score');
const guessEl=document.querySelector(".guess");
const highscoreEl=document.querySelector(".highscore");
const titleEl =document.querySelector(".title");


const checkBtn=document.querySelector(".check");
const againBtn=document.querySelector(".again");

function changeMessage(msg){
    msgEl.textContent=msg;
}
function resetGame(){
    secretNumber=Math.trunc(Math.random()*20)+1;
    score=20;

    scoreEl.textContent=score;
    titleEl.textContent="Guess My Number!";
    msgEl.textContent="Start guessing...";
    guessEl.value="";
    numberEl.textContent='?';
    checkBtn.disabled=false;

    document.querySelector("body").style.backgroundColor="#222";
    numberEl.style.width="15rem";
    numberEl.style.fontSize="6rem";
   
  
}

function winCss(){
    titleEl.textContent="you win";

    document.querySelector("body").style.backgroundColor="#60b347";
    numberEl.style.width="30rem";
    numberEl.style.fontSize="12rem";
    checkBtn.disabled="true";

}

function loseCss(){
    titleEl.textContent="you lose";
    document.querySelector("body").style.backgroundColor="rgb(300,0,0)";
    numberEl.style.width="30rem";
    numberEl.style.fontSize="12rem";
    checkBtn.disabled="true";

}

function setHighscore(){
    if(score>highscore){
        highscore=score;
        highscoreEl.textContent=highscore;
    }

}
function setScore(newScore){
    scoreEl.textContent=newScore;

}

function showSecretNumber(){
    numberEl.textContent=secretNumber;

}
let secretNumber=Math.trunc(Math.random()*20)+1;


let score=20;
let guess;
let highscore=0;

againBtn.addEventListener('click',resetGame);

checkBtn.addEventListener('click',()=>{
    guess= Number(guessEl.value);
 
    if (!guess) {
       
        changeMessage("no number");
      
       
      }


      
      //guess is right
      else if(guess===secretNumber){
       changeMessage("correct number");
        score++;
       setScore(score);
       showSecretNumber();
       winCss();
       setHighscore();
        
        
      }

      //guess is wrong
      else if(guess != secretNumber){
        guess>secretNumber?changeMessage("guess is too high"):changeMessage("guess is too low");

        if(score>1){
            score--;
        
           setScore(score);
        }else if(score===1){
            score--;
        
            showSecretNumber();
            setScore(score);
            loseCss();
            changeMessage("you lost the game");
        }
     }
       
       
       
 
    
   






});


