const score1 =document.getElementById('score1');
const score2 =document.getElementById('score2');
const player1=document.getElementById('player1');
const player2= document.getElementById('player2');
const reset =document.getElementById('reset');
const result =document.getElementById('result');
const countDownMessage =document.getElementById('message');
let clicked = false;
let activePlayer;


function updateScore(playerScore) {
  playerScore.innerText = parseInt(playerScore.innerText) + 1;
}

player1.addEventListener('click', function(){
  if (clicked == false) {
    startcounting();
  }
  clicked = true;
  activePlayer = player1;
  timer();
  updateScore(score1);
});

player2.addEventListener('click', function(){
  if(clicked == false) {
    startcounting();
  }
  clicked = true;
  activePlayer = player2;
  timer();
  updateScore(score2);
});

let countdown =30; 
function startcounting(){
  const count = setInterval(function(){
    countDownMessage.innerText = countdown;
    countdown--;
    
    if(countdown < 0){
      countDownMessage.innerText= "Time is over";
      clearInterval(count);
      countdown = 30;
    }
  },1000);
};

function timer(){
  setTimeout(function(){
    if(activePlayer){
      activePlayer.disabled = true;
      clicked = false;
      activePlayer = "";
      console.log("shivam")
      if(player1.disabled && player2.disabled){
        winner();
      }
    }
    }, 30000)
  };
  
  function winner(){
    const player1Score = score1.innerText;
    const player2Score = score2.innerText;
    if(player1Score==player2Score)
      {
      result.innerText ="Its a tie";
    }
    else if(player1Score>player2Score)
      {
      result.innerText =" PlayerOne is a Winner ";
    }
    else{
      result.innerText =" PlayerTwo is a Winner ";
    }
  };
  
  reset.addEventListener('click', function(){
    score1.innerText='0';
    score2.innerText='0';
    player1.innerText = 'Player1';
    player2.innerText = 'Player2';
    player1.disabled =false;
    player2.disabled =false;
    result.innerText='';
    countDownMessage.innerText= '30';
  });
  
  