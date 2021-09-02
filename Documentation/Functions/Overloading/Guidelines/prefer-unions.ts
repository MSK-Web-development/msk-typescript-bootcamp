/*
? Preferring Unions

- Always prefer parameters with union types whenever possible instead of overloads when possible
*/

function getEntityLength(model: number[]): number;
function getEntityLength(model: string): number;
function getEntityLength(model: any) {
    return model.length
}

/*
! Error - No overload matches this call.
  Overload 1 of 2, '(model: number[]): number', gave the following error.
    Argument of type 'number[] | "Entity"' is not assignable to parameter of type 'number[]'.
      Type 'string' is not assignable to type 'number[]'.
  Overload 2 of 2, '(model: string): number', gave the following error.
    Argument of type 'number[] | "Entity"' is not assignable to parameter of type 'string'.
      Type 'number[]' is not assignable to type 'string'.
*/
const result1 = getEntityLength(Math.random() > 0.5 ? [1, 2, 3] : "Entity")



//* The Fix -  Use Unions instead.
function getEntityLengthV2(model: number[] | string): number {
    return model.length
}

//* OK 
const result2 = getEntityLengthV2(Math.random() > 0.5 ? [1, 2, 3] : "Entity")





