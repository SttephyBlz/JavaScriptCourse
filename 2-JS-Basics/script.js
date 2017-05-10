/*
Lecture: variables
var name = 'John';
console.log(name);

//Kettlecase
var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);*/

//Lecture: variables 2. Type coercion
/*var name = 'John';
var age = 26;

//console.log(name+age);
//console.log(age+age);

var job, isMarried;
//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age +
  ' years old ' + job + '. Is he married? ' +
  isMarried + '.');

//variable mutation
age = 'twenty six';
job = 'driver';

console.log(name + ' is a ' + age +
  ' years old ' + job + '. Is he married? ' +
  isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a ' + age +
  ' years old ' + job + '. Is he married? ' +
  isMarried + '.');
*/

//Lecture: operators
/*var now = 2016;
var birthYear = now - 26;
  birthYear = now - 26 * 2;
console.log(birthYear);

//Operators precedence
//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark =(3 + 5) * 4 - 6;
//ageJohn = ageMark = 26;

ageJohn++;
ageMark*=2;
ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);
*/

/*----------Lecture: if/else statements------------*/

/*var name = 'John';
var age = 26;
var isMarried = 'no';

//== does type coercion and === does not
if(isMarried === 'yes'){
  console.log(name + ' is married!');
}else{
  console.log(name + ' will hopefully marry soon!');
}

isMarried = false;

/*if(isMarried){
  console.log('YES!');
}else{
  console.log('NO!');
}*/

/*if(isMarried){
  console.log('YES!');
}

//Asi que aqui no convierte el numero en string
//por lo tanto es falso.
if(23 === '23'){
  console.log('Something ...');
}
*/
/*-----------Lecture: boolean logic and switch -----------*/
/*var age = 26;

if(age< 20){
  console.log('John is a teenager.');
}else if(age >= 20 && age < 30){
  console.log('John is a young man.');
}else{
  console.log('John is a man.');
}

var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
  case 'teacher':
    console.log('John teaches kids.');
    break;
  case 'driver':
    console.log('John drives a cab in lisbon.');
    break;
  case 'cop':
    console.log('John helps fight crime.');
    break;
  default:
    console.log('John does something else.');

}
*/

//Coding challenge. Vid 14.
/*
  John and a friend invented a simple game
  where the player with the highest value
  of his height (in cms) plus five times his
  age wins.

  1. Create variables for the heights and ages
  of 2 friends and assign them some values.

  2. Calculate their scores

  3. Decide who wins and print the winner
  to the console. Include the score in the string
  that you output to the console. Don't forget
  that there can be a draw (both players with the
  same score).

  4. EXTRA: Add a third player and now decide who wins.
  Hint: you will need the && operator to take
  the decision. If you can't solve this one, just
  watch the solution.

*/

//game

/*var johnsAge = 18;
var johnsHeight = 158;

var jimsAge = 20;
var jimsHeight = 150;

var score1 =  johnsHeight + 5 * johnsAge;
var score2 = jimsHeight + 5 * jimsAge;

if(score1>score2){
  console.log("Score: "+score1+". John wins.");
}else if (score2>score1) {
  console.log("Score: "+score2+". Jim wins.");
}else{
  console.log("Draw!");
}

// third player

var marksAge = 22;
var marksHeight = 160;

var score3 = marksHeight + 5 * marksAge;

if(score1>score2 && score1>score3){
  console.log("Score: "+score1+". John wins.");
}else if (score2>score1 && score2>score3) {
  console.log("Score: "+score2+". Jim wins.");
}else if (score3>score1 && score3>score2) {
  console.log("Score: "+score3+". Mark wins.");
}else {
  console.log("It's Draw!");
}
*/

/*--------Lecture: Functions----------*/

//DRY: Don't repeat yourself

/*function calculateAge(yearOfBirth) {
  var age = 2016 - yearOfBirth;

  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUntilRetirement(name, yearOfBirth) {
  var age = calculateAge(yearOfBirth);

  var retirement = 65 - age;
  if (retirement>=0) {
    console.log(name + ' retires in '+retirement+ ' years.');
  }else{
    console.log(name + ' is already retired.');
  }
}

  yearsUntilRetirement('John', 1990);
  yearsUntilRetirement('Mike', 1969);
  yearsUntilRetirement('Mary', 1948);
*/

/*--------Lecture: Statements and expressions----------*/
/*
//statement: performs an action
function someFun(par) {
  //code
}
//expressions: produces a value.
var someFun = funtion(par){
    //code
}*/

/*--------Lecture: Arrays----------*/

/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names[0]);

names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

//adds an element at the end of array
john.push('blue');
//adds an element at the beginning of array
john.unshift('Mr.');
//removes an element from the end of array
john.pop();
//removes an element from the beginning of array
john.shift();

console.log(john);

//Position of the element
console.log(john.indexOf('Smith'));

//-1 es que no está en el array
if(john.indexOf('teacher') === -1){
  console.log('John is not a teacher.');
}*/

/*--------Lecture: Objects and properties----------*/
/*
//Create object
//1.Object literal

var john ={
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false
}

console.log(john);

//Ways to read: dot notation
console.log(john.lastName);
//Square brackets
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

//data mutation
john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

//Create object 2.
var jane = new Object();

jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

/*--------Lecture: Objects and methods----------*/
/*
v1
var john ={
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    //This is a method of the object John
    //function expression
    //calculateAge is name and the function is value

    //  this is the equivalent: var calculateAge = function(yearOfBirth){}

    //this -> refers to object john.
    return 2016-this.yearOfBirth;
  }
}


console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/

/*
//v2

var john ={
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    this.age = 2016 - this.yearOfBirth;
  }
}
john.calculateAge();
console.log(john);

var mike ={
  yearOfBirth: 1950,
  calculateAge: function() {
    this.age = 2016 - this.yearOfBirth;
  }
}
mike.calculateAge();
console.log(mike);
*/

/*--------Lecture: Loops and iteration----------*/
/*
for (var i = 0; i <10; i++) {
  console.log(i);
}

var names = ['John', 'Jane', 'Mary',
  'Mark', 'Bob'];
//for loops
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (var i = names.length-1; i >= 0; i--) {
  console.log(names[i]);
}
*/
//while loops
/*
var names = ['John', 'Jane', 'Mary',
  'Mark', 'Bob'];

var i=0;

while (i < names.length) {
  console.log(names[i]);

  i++;
}

for (var i = 1; i <=5; i++) {
  console.log(i);
  if (i===3) {
    break;
  }
}

for (var i = 1; i <=5; i++) {

  if (i===3) {
    continue;
  }
  console.log(i);
}*/

//Coding challenge. Vid 22.
/*
  1. Create an array with some years where
    persons were born.

  2. Create an empty array (just []).

  3. Use a loop to fill the array with the
    ages of the persons.

  4. Use another loop to log into the console
    wheter each person is of full age (18 or older),
    as well as their age.

  5. Finally, create a function called printFullAge
    which receives the vector of years as an argument,
    executes the steps 2.,3. and 4. and returns a vector
    of true/false boolean values: true if the person is
    of full age (>=18 years) and false if not (<18 years)

  6. Call the function with two different vectors and store
    the results in two variables: full_1 and full_2

  Example input: [1965,2008,1992]
  Example output: [true, false ,true]

  Hint: you can use a loop not only to read from array
  , like y[i], but also to set values in an array, like
  y[i] = ... you can also use the specific array methods.

*/

function printFullAge(years) {
  var ages = [];
  var fullAges = [];
  for (var i = 0; i < years.length; i++) {
    ages[i]= 2016 - years[i];
  }

  for (var i = 0; i < ages.length; i++) {
    if(ages[i]>=18){
      console.log("Person: "+(i+1)+" is "+ages[i]+" and is full age.");
      fullAges.push(true);
    }else{
      console.log("Person: "+(i+1)+" isn't "+ages[i]+" and isn't full age.");
      fullAges.push(false);
    }
  }

  return fullAges;
}

var years = [1998, 1965, 2000, 1995];
console.log(years);
var full_1 = printFullAge(years);
console.log(full_1);

var years2 = [2015, 1990,1969,2005];
console.log(years2);
var full_2 = printFullAge(years2);
console.log(full_2);
