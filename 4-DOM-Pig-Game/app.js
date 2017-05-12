/*
  DOM: Document Object Model;
  HTML content is stored in DOM.

*/

/*
GAME RULES:

- The game has 2 players, playing in rounds.

- In each turn, a player rolls a dice as many
times as he whishes. Each result get added to
his ROUND score.

- BUT, if the player rolls a 1, all his ROUND
score gets lost. After that, it's the next
player's turn.

- The player can choose to 'Hold', which means
that his ROUND score gets added to his GLOBAL
score. After that, it's the next player's turn.

- The first player to reach 100 points on
GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

init();

//Change content of html element.
//Setter
//Edit
//document.querySelector('#current-'+activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>';

//Getter
//Read
//var x = document.querySelector('#score-0').textContent;
//console.log(x);


/*Events
Notifications that are sent to notify the code
that something happened on the webpage.

Event listener: Function that performs an action based
on a certain event. It waits for a specific event to happen.

Events guide: https://developer.mozilla.org/en-US/docs/Web/Events
*/

//Events and event handling


/*Callback function is a function we pass as an argument and
this function will call it for us.

Anonymouse function is a function that doesn't have a name
so it can't be reused.
function() {}

*/

document.querySelector('.btn-roll').addEventListener(
  'click', function() {

    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src= 'dice-'+dice+'.png';

    //3. Update the round score IF the rolled number was NOT a 1.
    //Different.
    if(dice !== 1){
      //Add score
      roundScore += dice;
      document.querySelector('#current-'+
        activePlayer).textContent = roundScore;
    }else{
      //Next player
      nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener(
  'click', function() {
    //Add current score to global score
    scores[activePlayer] += roundScore;

    //Update UI
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

    //Check if player won the game.
    if(scores[activePlayer]>=20){
      document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
      document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    }else{
      //Next player
      nextPlayer();
    }

});

function nextPlayer() {
  //Next player
  //ternary operator
  //reading it like: if activePlayer === 0 then activePlayer = 1 else activePlayer = 0;
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore=0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  //toggle
  //add the class of the class that's not there and if the class is already
  //there, it removes it.
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener(
  'click', init);

function init() {
  scores= [0,0];
  //0 -> fst one, 1 -> snd one
  activePlayer = 0;
  roundScore = 0;

  //Change CSS
  document.querySelector('.dice').style.display = 'none';

  //This is faster
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}
