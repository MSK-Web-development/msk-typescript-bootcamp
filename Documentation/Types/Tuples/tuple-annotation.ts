/*
? Tuple types

NOTES:
- Just like Array type but,
- Tuples know exactly how many items it contains.
- Tuples know which types are at which positions
- Tuples dont have a representation in Runtime

USES:
- Some APIs return arrays and the items could have their own meaning. We can use Tuples.

! Sometimes it's better to use objects with Keys than Tuples.
*/

// This tuple contains 3 items of the below types (in order)
type CarDetailsTuple = [number, string, boolean];
const myCar: CarDetailsTuple = [2021, "BMW", true];


// Example
function printCarDetails(car: CarDetailsTuple) {

    //* We can destructure Tuples
    let [model, make, sedan] = car;

    //! Error - Tuple type 'CarDetailsTuple' of length '3' has no element at index '4'.
    let cost = car[4]
}












