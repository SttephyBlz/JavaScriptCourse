/*

  (Almost) Everything is an object.

  Primitive:
    +Number
    +String
    +Boolean
    +Undefined
    +Null
  Object:
    Everything else.


  Objects, inheritance and prototypes.

  -Every JS object has a prototype property,
  which makes inheritance possible in JS.
  -The prototype property of an object is where we
    put methods and properties that we want
    other objects to inherit.
  -The constructor's prototype property is not
  the prototype of the constructor itself, it's
  the prototype of ALL instances that are created
  through it.
  -When a certain method (or property) is called,
  the search starts in the object itself, and if it
  cannot be found, the search moves on to the object's
  prototype. This continues until the method is found:
  prototype chain.

*/

//Lecture: Creating objects: Function constructors
/*
var john1 = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

//inheritance
//method
Person.prototype.calculateAge  = function() {
  console.log(2016-this.yearOfBirth);
}

//property
Person.prototype.lastName = 'Smith';

//Instanciation.
var john =
  new Person('John', 1990, 'teacher');
var jane =
  new Person('Jane', 1969, 'designer');
var mark =
  new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(john.lastName);
*/

//Lecture: The property chain in console

//Lecture: Creating objects : object.create
/*
  +Object.create: builds an object that inherits
  directly from the one that we pased into the
  first argument.
  Allows to implement complex inheritant structures
  easily.

  +Fuction constructor: the newly created object
  inherits from the contructor's prototype property.
  This is most popular.

var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name:{value:'Jane'},
  yearOfBirth: {value: 1969},
  job: {value:'designer'}
});
*/

//Lecture: primitives vs objects

/*

  A variable declared as an objecto doesn't have
  a real copy of the object, it just points to the
  object.

*/
/*
//primitives
var a = 23;
//copied value of: a = 23
var b = a;

a=46;
console.log(a);
console.log(b);
//objects
var obj1 = {
  name: 'John',
  age: 26
};
//Created new reference.
var obj2 = obj1;

obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

//We only pass the reference of the object
function change(a,b) {
  //Doesn't affect the outside one
  a=30;
  b.city = 'San Francisco'
};

change(age, obj);

console.log(age);
console.log(obj.city);
*/
//Lecture: Functions.- Passing functions as arguments
//+first class functions
/*

  -Instance of object type
  -behaves like an object
  -it can be stored in a variable
  -can pass it as an argument to another one.
  - can returnin it from a function

*/
/*
var years = [1990,1965,1937,2005,1994];

function arrayCalc(arr, fn) {
  //fn is a callback function, because it's called later.
  var arrRes = [];

  for (var i = 0; i < arr.length; i++) {
    arrRes.push(
        fn(arr[i])
      );
  }

  return arrRes;
};

function calculateAge(el) {
  return 2016-el;
};

function isFullAge(el) {
  return el>=18;
}

function maxHeartRate(el) {
  if(el >= 18 && el <=81)
    return Math.round(206.9-(0.67*el));
  else
    return -1;
}

var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages,isFullAge);

var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

//Lecture: Functions.- Functions returning functions
//+first class functions
/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if(job === 'teacher'){
    return function(name) {
      console.log('What subject do you teach, '+name+'?');
    }
  } else{
    return function(name) {
      console.log('Hello '+ name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');

//This is evaluated from left to right
interviewQuestion('teacher')('Mark');
*/

//Lecture: Immediately invoked function expressions (IIFE)
/*
function game() {
  var score = Math.random() * 10;
  console.log(score>=5);
};

game();
*/
//data privacy
//inside () treats a function as a declaration
(function() {
  var score = Math.random() * 10;
  console.log(score>=5);
})();
//console.log(score);

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score>=5 - goodLuck);
})(5);
