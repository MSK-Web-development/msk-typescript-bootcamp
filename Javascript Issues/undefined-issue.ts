/*
 ? In JavaScript, if you access a property that doesn’t exist, you’ll get the value undefined rather than a runtime error. Because of this, when you read from an optional property, you’ll have to check for undefined before using it.
 */

function printName(obj: { first: string; last?: string }) {
  //! Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());

  //! Object is possibly 'undefined'.
  if (obj.last !== undefined) {

    // OK
    console.log(obj.last.toUpperCase());
  }

  //? A safe alternative using modern JavaScript syntax: "?""
  console.log(obj.last?.toUpperCase());
}
