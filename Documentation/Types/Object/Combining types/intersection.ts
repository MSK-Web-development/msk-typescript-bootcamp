/*
? Intersection of types

- Yet another way to combine types in TypeScript.
- Use the "&" operator to achieve intersection.
*/

interface Bicycle {
    cost: string;
}
interface Bike {
    speed: number;
}

type Vehicle = Bicycle & Bike;

// Test
function printVehicle(v: Vehicle) {
    console.log(v.cost);
}
