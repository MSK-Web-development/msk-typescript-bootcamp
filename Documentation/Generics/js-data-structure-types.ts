/*
? Array and ReadonlyArray types

- It's better if Data structures are generic types because they have to work with different types.
*/

// Both are array types
type CarModels = number[];
type BikeModels = Array<number>; // Generic

// You cannot push into these arrays
type ReadOnlyPlaneModels = readonly number[];
type ReadOnlyBicycleModels = ReadonlyArray<number>; // Generic


/*
? "Array" itself is a Generic type internally.

interface Array<Type> {
    length: number;
    pop(): Type | undefined;
    push(...items: Type[]): number;
  }

*/

//? More examples of JS data structures

// Map type
type CarMap = Map<number, string> // Generic internally

// Set type
type CarSet = Set<number> // Generic internally

// Promise type
type APIResp = Promise<number> // Generic internally

