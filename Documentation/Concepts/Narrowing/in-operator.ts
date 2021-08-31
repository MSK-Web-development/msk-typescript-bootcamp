/*
? The in operator narrowing

- In Javascript, you can use the "in" operator to check if a field exists in an object.
- TypeScript can understand / narrow down and resolve the type when it encounters the "in" operator.
*/

type Plane = {
    model: number,
    fly: () => void,

}

type Boat = {
    sail: () => void,
}

function printVehicle(vehicle: Plane | Boat) {
    //! Error - Property 'sail' does not exist on type 'Plane | Boat'.
    console.log(vehicle.sail());

    //* No Error
    //* TypeScript narrowed down by understanding the "in" keyword in Javascript
    if ("sail" in vehicle) {
        console.log(vehicle.sail());
    }
}