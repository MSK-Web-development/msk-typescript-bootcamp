/*
? Tuples with Interfaces

NOTES:
- Another way to declare a Tuple type is with interface (With specialized properties)
*/

interface CarDetailsTuple {
    length: 4;

    0: number;
    1: string;
    2: boolean;
    3: "India" | "US"
}

const myCar: CarDetailsTuple = [2021, "BMW", true, "India"];