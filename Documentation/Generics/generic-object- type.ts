/*
? Generic Object types

- You can give the object a generic type and use it for the fields inside.
*/

interface Vehicle<Type> {
    model: Type; //* Generic type
    make: string;
    sedan: boolean;
}

// One way
const car1: Vehicle<number> = {
    model: 2021,
    make: "BMW",
    sedan: false
};

// Another way
const car2: Vehicle<string> = {
    model: '2021',
    make: "BMW",
    sedan: false
};

