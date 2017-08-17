/*

  MODULES

  +Important aspect of any robust application's architecture.
  + Keep the units of code for a project both cleanly separated
    and organized.
  +Encapsulate some data into privacy and expose other data publicly.


  User Interface (UI) MODULE
    -Get input values
    -Add the new item to the UI
    -Update the UI

  DATA MODULE
    -Add the new item to our data structure
    -Calculate budget

  CONTROLLER MODULE
    -Add event handler

*/
//IIFE (Immediately invoked function expression)
//Budget Controller
var budgetController = (function() {

  //Some code

})();

// UI Controller
var UIController = (function() {

  //Some code

})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl){

  var ctrlAddItem = function(){
    // 1. Get the filed input data

    // 2. Add the item to the budget controller

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI
    console.log('Woo');
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event){
    if(event.keyCode === 13 || event.which === 13){
      ctrlAddItem();
    }
  });

})(budgetController, UIController);
