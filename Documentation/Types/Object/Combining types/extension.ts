/*
? Interface object types can be extended

- Types can be combined with the extension construct in TypeScript.
- Use the "extends" keyward to keep extending
*/

interface Car {
    make: string;
    model: number;
    sedan: boolean
}

interface RaceCar extends Car {
    topSpeed: number;
    bounty: number;

}

interface LuxuryCar extends RaceCar {
    cost: string;
}

/*
? Extension from multiple types is also possible

- Use the "," separator to keep extending
*/

interface Bicycle {
    cost: string;
}
interface Bike {
    speed: number;
}
interface MotorCycle extends Bicycle, Bike {
    manufacturer: string
}

