/*
 ? Interfaces VS Type aliases | "Extensibility"
 
 NOTES:
   - You can extend an interface but you cannot extend a type. 
   - Instead you can use intersections to achieve the same.
 */

// Interface example
interface CarInterface {
    make: string;
    model: number;
}

interface MustangInterface extends CarInterface {
    drift: boolean;
}

const myCar1: MustangInterface = {
    make: "Ford",
    model: 2005,
    drift: true
}

// Type alias example
type CarType = {
    make: string,
    model: number
}

type MustangType = CarType & {
    drift: boolean
}

const myCar2: MustangType = {
    make: "Ford",
    model: 2005,
    drift: true
}