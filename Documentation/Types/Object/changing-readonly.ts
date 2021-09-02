//* A way to change "readonly" to (Read / Write) via "aliasing"

// Example
interface ReadOnlyCar {
    readonly make: string
    readonly model: number // Readonly
}

interface ReadWriteCar {
    make: string
    model: number // (Read/Write)
}

let readWriteCar: ReadWriteCar = {
    make: "BMW",
    model: 2020
}

// We assign (Read/Write) to Readonly object
let readOnlyCar: ReadOnlyCar = readWriteCar;

console.log(readOnlyCar.model); // 2020
readWriteCar.model++;
console.log(readOnlyCar.model); // 2021
