/*
? Type predicate

- Predicate implies - The part of a sentence or clause containing a verb and stating something about the subject (e.g. went home in John went home ).
- Use a predicate as the return type of a function
*/

type Plane = {
    fly: () => string
};

type Boat = {
    sail: () => string
}

function moveVehicle(vehicle: Plane | Boat): vehicle is Plane {
    //! Didn't understand why there is error here. Read predicates again!
    //! https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
    return vehicle.fly();
}

moveVehicle({
    fly: () => { return "fly" }
})
