/*
? Constraints

- Use the 'extends' clause to limit the types that a parameter can accept.
- The extended parameters will be inferred by TypeScript while compiling.
- Generics are all about relating two or more values with the same type!
*/

// Example to get either longest string or number
// Here we are constraining Type to { length: number }, 
// We are now allowed to access the .length property of the a and b parameters.
function getLongestEntity<Type extends { length: number }>(a: Type, b: Type): Type {
    if (a.length >= b.length) {
        return a
    } else {
        return b;
    }
}

// Return type is string
const out1 = getLongestEntity("one", "two")

// Return type is number[]
const out2 = getLongestEntity([1, 2], [1, 2, 3])

