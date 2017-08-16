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
var budgetController = (function() {
  var x = 23;

  var add = function(a){
    return x+a;
  }

  return {
    publicText: function(b){
      return add(b);
    }
  }
})();


var UIController = (function() {

  //Some code

})();


var controller = (function(budgetCtrl, UICtrl){

  var z = budgetCtrl.publicText(1);

  return {
    anotherPublic: function(){
      console.log(z);
    }
  };

})(budgetController, UIController);
