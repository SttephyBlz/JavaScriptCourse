///////////////////////////////////////
// Lecture: Hoisting in practice
/*

// are avaible before the execution
//phase actually starts
//Only works with functions that are statements/declarations
calculateAge(1960);

function calculateAge(year) {
  console.log(2016-year);
}

//retirement(1990);
var retirement = function(year) {
  console.log(65-(2016-year));
}

//vars
//sets it as undefined. when it's defined after
// to get its value but if it's not declared there is an error.
console.log(age);
var age = 23;
//console.log(age);
function foo() {
  console.log(age);
  var age = 65;
  //function context
  console.log(age);
}

foo();
//global execution context
console.log(age);
*/
///////////////////////////////////////
// Lecture: Scoping and scope the chain

//answers the question: where can we access a certain variable
//only works from inside to outside
// First scoping chain example

/*
//global scope
var a = 'Hello!';
first();

function first() {
    //first() scope
    var b = 'Hi!';
    second();

    function second() {
        //second() scope
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

/*
Order in which functions are called.
Execution stack:
^
| Context: third()
| Context: second()
| Context: first()
| Context: Global

Order in which functions are
written in the code.
Scope chain:
^
| Scope: Global -> a
| Scope: first() -> a & b
| Scope: second() -> a & b & c
*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}
//The third function is in different scope.
function third() {
    var d = 'John';
    console.log(a + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword

/*

  Regular function: 'this' -> points at the global object.
  Method call: 'this' -> points to the object that
  is calling the method.

  'this'-> is not assigned a value until a function where
  it is defined is actually called.

*/

//Window object is the default object
//console.log(this);
/*calculateAge(1985);

function calculateAge(year) {
  console.log(2016-year);
  console.log(this);
}*/

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2016-this.yearOfBirth);

    /*function innerFuction() {

        Rule:
          When a regular funcion code happens,
          then the default object is the window object.


      console.log(this);
    }

    innerFuction();
    */
  }
};

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

//Method borrowing
//treat the function as a variable.
mike.calculateAge = john.calculateAge;
//now you are calling the function
mike.calculateAge();

// 'this' -> only becomes something as soon
// as the method gets called.

//vid 34.
