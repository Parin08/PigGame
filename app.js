/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var roundScore,totalScore,currentPlayer;

roundScore=0;
totalScore=[0,0];
currentPlayer=0;
 var dicePrevious=0;

document.querySelector('#score-0').textContent='0';
document.querySelector('#score-1').textContent='0';
document.querySelector('#current-0').textContent='0';
document.querySelector('#current-1').textContent='0';

document.querySelector('.dice').style.display='none';

function newGame(){
    
    roundScore=0;
totalScore=[0,0];
currentPlayer=0;

document.querySelector('#score-0').textContent='0';
document.querySelector('#score-1').textContent='0';
document.querySelector('#current-0').textContent='0';
document.querySelector('#current-1').textContent='0';

document.querySelector('.dice').style.display='none';
    document.querySelector('#name-0').textContent='player-1';
    document.querySelector('#name-1').textContent='player-2'
    
}


function hold(){
    
    if(roundScore==0){
        alert('You cannot hold your score since it is zero');
    }
    else{
    totalScore[currentPlayer] += roundScore;
    document.querySelector('#score-'+currentPlayer).textContent=totalScore[currentPlayer];
        
        if(totalScore[currentPlayer]>=100){
           // console.log("WINNER");
            document.querySelector('#name-'+currentPlayer).textContent='WINNER!';
    
        }
        document.querySelector('.dice').style.display='none';
        document.getElementById('current-'+currentPlayer).textContent=0;
    if(currentPlayer===1){
            
        currentPlayer=0;
        }else{
            
            currentPlayer=1;
        }
        roundScore=0;   
         if(currentPlayer===0){
            
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
            
        }else{
            
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
            
        }
        
    }
    
   
}



function btn(){
    
//    var dice=Math.floor(Math.random()*6)+1;
    var dice=6;
   document.querySelector('.dice').style.display='block';
     document.querySelector('.dice').src='dice-'+ dice +'.png';
   
//     
    if(dice!==1){
        
        if(dice===6 && dicePrevious===0 ){
            
            totalScore[currentPlayer]=0;
            
             if(currentPlayer===1){
            
        currentPlayer=0;
        }else{
            
            currentPlayer=1;
        }
        roundScore=0;     
         dicePrevious=dice;
           console.log(dicePrevious);
        }
        else{
       roundScore+=dice;
        document.getElementById('current-'+currentPlayer).textContent=roundScore;      
        
      
      
       
        document.querySelector('.btn-hold').addEventListener('click',hold);
        document.querySelector('.btn-new').addEventListener('click',newGame);
        }
        
        
    }else{
        document.getElementById('current-'+currentPlayer).textContent=0;
        document.querySelector('.dice').style.display='none';
        if(currentPlayer===1){
            
        currentPlayer=0;
        }else{
            
            currentPlayer=1;
        }
        roundScore=0;     
        
        if(currentPlayer===0){
            
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
            
        }else{
            
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
            
        }
    }
}

document.querySelector('.btn-roll').addEventListener('click',btn);
