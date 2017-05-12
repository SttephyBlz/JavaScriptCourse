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
