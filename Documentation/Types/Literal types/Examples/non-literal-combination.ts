/*
? Example 2
? Creating your own literal type with non-literal combinations

*/

interface Car {
    make: string;
}

let myCar: Car | "Honda" | "Ford" | 123;

myCar = {
    make: "Honda"
}

myCar = "Honda";
myCar = 123;

//! Error - Type 'true' is not assignable to type 'Car | "Honda" | "Ford" | 123'
myCar = true;





