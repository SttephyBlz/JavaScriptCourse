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

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }

  return {
    getInput: function(){
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMstrings: function(){
      return DOMstrings;
    }
  };

})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl){

  var DOM = UICtrl.getDOMstrings();

  var ctrlAddItem = function(){
    // 1. Get the filed input data
    var input = UICtrl.getInput();
    console.log(input);

    // 2. Add the item to the budget controller

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI
  }

  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event){
    if(event.keyCode === 13 || event.which === 13){
      ctrlAddItem();
    }
  });

})(budgetController, UIController);
