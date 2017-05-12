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
//State variable: tell us the condition of the system.
var scores, roundScore, activePlayer, gamePlaying, previousDice;

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
    if(gamePlaying){

      //1. Random number
      var dice1 = Math.floor(Math.random() * 6) + 1;
      var dice2 = Math.floor(Math.random() * 6) + 1;

      //2. Display the result
      document.getElementById('dice-1').style.display = 'block';
      document.getElementById('dice-2').style.display = 'block';
      document.getElementById('dice-1').src= 'dice-'+dice1+'.png';
      document.getElementById('dice-2').src= 'dice-'+dice2+'.png';

      /*
      1. A player looses his entire score whe he rolls
        two 6 in a row. After that, it's the next player's
        turn. (Hint: Always save the previous dice roll in a separate
        variable).
      */
      /*if(previousDice === 6 && dice === 6){
        document.querySelector('#score-'+activePlayer).textContent = 0;
        scores[activePlayer] = 0;
        nextPlayer();
      }else if(dice !== 1){
        //3. Update the round score IF the rolled number was NOT a 1.
        //Different.

        //Add score
        roundScore += dice;
        document.querySelector('#current-'+
          activePlayer).textContent = roundScore;
      }else{
        //Next player
        nextPlayer();
      }

      previousDice = dice;
      */

      /*
      3. Add another dice to the game, so that there are two dices now.
        The player looses his current score when one of them is a 1.
        (Hint: you will need css to position the second dice, so take a look
        at the css code for the first one.)
      */
      //3. Update the round score IF the rolled number was NOT a 1.
      //Different.
      if(dice1 !== 1 && dice2 !== 1){

        //Add score
        roundScore += dice1 + dice2;
        document.querySelector('#current-'+
          activePlayer).textContent = roundScore;
      }else{
        //Next player
        nextPlayer();
      }
    }
});

document.querySelector('.btn-hold').addEventListener(
  'click', function() {
    if(gamePlaying){
      //Add current score to global score
      scores[activePlayer] += roundScore;

      //Update UI
      document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

      /*
      2. Add an input filed to the HTML where players can set the
        winning score, so that they can change the predefined score
        of 100. (Hint: you can read that value with the .value property
        in JS. This is a good oportunity to use google to figure this out).
      */
      var input = document.querySelector('.btn-set-score').value;
      var winningScore
      //Undefined, 0, null, or "" are coerced to false
      //Anything else is coerced to true
      if(input){
        winningScore = input;
      }else{
        winningScore = 100;
      }

      //Check if player won the game.
      if(scores[activePlayer]>=winningScore){
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying = false;
      }else{
        //Next player
        nextPlayer();
      }
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
  gamePlaying = true;
  previousDice = 0;
  //Change CSS
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';

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

//Challenges:
/*
1. A player looses his entire score whe he rolls
  two 6 in a row. After that, it's the next player's
  turn. (Hint: Always save the previous dice roll in a separate
  variable).
*/

/*
2. Add an input filed to the HTML where players can set the
  winning score, so that they can change the predefined score
  of 100. (Hint: you can read that value with the .value property
  in JS. This is a good oportunity to use google to figure this out).
*/

/*
3. Add another dice to the game, so that there are two dices now.
  The player looses his current score when one of them is a 1.
  (Hint: you will need css to position the second dice, so take a look
  at the css code for the first one.)
*/
