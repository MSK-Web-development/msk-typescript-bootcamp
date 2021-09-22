/*
? Class Fields

NOTES:
- 
- 
 */

class Car {
    make: string; // (Read/Write)
    readonly model: number; // Prevents assignment outside of the constructor
    sedan: boolean;
    cost; // Implicit "any" type
    topSpeed = 300; // Initializer inferred as "number" type
    accelerate: (speed: number) => void;
    decelerate: () => void;

    constructor() {
        this.cost = "5 lakhs";
    }  
}

const myCar = new Car();

//! Error - Type 'string' is not assignable to type 'number'. 
myCar.topSpeed = "asdasd";
