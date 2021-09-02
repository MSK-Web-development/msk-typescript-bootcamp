/*
? Specify generic types

- You can manually specify types while calling function to avoid TS showing error.
*/

// This function tries to concatenate 2 items (could be any type.)
// You must make sure that .concat() exists on specified arg type.
function joinItems<Type>(a: Type[], b: Type[]): Type[] {

    //! This could lead to error if you don't manually specify
    return a.concat(b);
}

// Here we are manually specifying as we know the function could take either "string" or "number"
const result = joinItems<string | number>([1, 2], ["3", "4"])