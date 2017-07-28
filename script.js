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
/*(function() {
  var score = Math.random() * 10;
  console.log(score>=5);
})();
//console.log(score); - err

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score>=5 - goodLuck);
})(5);
*/

//Lecture: Closures.
/*
  Closure.
    An inner function has always access to the
    variables and parameters of its outer function,
    even after the outer function has returned.

    Variables stay in the scope chain even when
    it is returned and deleted from execution stack.


function retirement(retirementAge) {
  var a = ' years left until retirement.';

  return function(yearOfBirth) {
    var age= 2016-yearOfBirth;
    console.log((retirementAge-age)+ a);
  }
};

var retirementUS = retirement(66);

//retirement(66)(1990);


var retirementGermany = retirement(65);

var retirementIceland = retirement(67);


retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if(job === 'teacher'){
      console.log('What subject do you teach, '+name+'?');

    } else{
      console.log('Hello '+ name + ', what do you do?');
    }
  }
};

interviewQuestion('teacher')('John');
*/

//Lecture: Bind, call and apply
/*
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if(style === 'formal'){
      console.log('Good '+timeOfDay+
      ' ladies and gentlemen! I\'m '+
      this.name +', I\'m a '+this.job+
      ' and I\'m '+this.age+' years old.');
    }else if (style === 'friendly'){
      console.log('Hey! What\'s up? I\'m '+
      this.name +', I\'m a '+this.job+
      ' and I\'m '+this.age+' years old. Have a nice '+timeOfDay+'.');
    }
  }
}

var emily ={
  name: 'Emily',
  age: 35,
  job: 'designer'
}

john.presentation('formal', 'morning');

//Sets the 'this' variable of the first argument
john.presentation.call(emily, 'friendly', 'afternoon');

//Apply accepts the arguments as an array
//john.presentation.apply(emily, ['friendly', 'afternoon']);

//Bind: is similar to call, allows to set the 'this' variable explicity
//generates a copy of the function
var johnFriendly = john.presentation.bind(
  john, 'friendly'
);
//carrying.
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');


var years = [1990,1965,1937,2005,1998];

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

function isFullAge(limit, el) {
  return el>=limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(fullJapan);
*/

//Lecture: Coding Challenge 4
/*
--Let's build a fun quiz game in the console!

1. Build a function consturctor called Question to describe
a question. A question should include:
  a) question itself
  b) the answers from which the player can choose the correct
      one (choose an adequate data structure here, array, object, etc.)
  c) correct answer (I would use a number for this)

2. Create a couple of questions usin the constructor

3. Store them all inside an array

4. Select one random question and log it on the console,
  together with the possible answers (each question should have
  a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer.
  The user should input the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer
  is correct or not. (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their
  code. So make sure that all your code is private and doesn't interfere
  with the other programmers code. (Hint: We learned a special technique
  to do exactly that).

--- Expert Level ---

8. After you display the result, display the next random question, so that
  the game never ends (Hint: Write a function for this and call it right after
  displaying the result).

9. Be careful: after Task 8, the game literally never ends. So include the
  option to quit the game if the user writes 'exit' instead of the answer.
  In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is
  correct, add 1 point to the score (Hint: I'm going to use the power of Closures
  for this, but you don't have to, just do this with the tools you feel more
  comfortable at this point).

11. Display the score in the console. Use yet another method for this.

*/

//task 7 /* (function())(); */

(function(){
  //Constructor
  function Question(question, answers, correct){
    this.question = question;
    this.answers  = answers;
    this.correct  = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for(var i=0; i<this.answers.length; i++){
      console.log(i+': '+this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function(ans){
    if(ans === this.correct){
      console.log('Correct answer!');
    }else{
      console.log('Wrong answer. Try again!');
    }
  }

  var q1 = new Question(
    'Is JS the coolest programming language?',
    ['Yes', 'No'],
    0
  );

  var q2 = new Question(
    'What is the name of course\'s teacher?',
    ['John', 'Michael', 'Jonas'],
    2
  );

  var q3 = new Question(
    'What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tedious'],
    2
  );

  var questions = [q1, q2, q3];

  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  var answer = parseInt(prompt('Please select the correct answer.'));

  questions[n].checkAnswer(answer);
})();
