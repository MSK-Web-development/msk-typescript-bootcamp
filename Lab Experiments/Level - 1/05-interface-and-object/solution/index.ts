
// Type alias of a Union
type Model = number | string;

interface Plane {
    make: string;
    model: Model;
    isJet: boolean,
}

/**
 * 
 * @param plane - An object describing all the plane details
 * 
 * @return void (nothing)
 */
function printPlaneDetails(plane: Plane, listCountries: Function): void {
    console.log("Plane manufacturer is " + plane.make.toUpperCase());
    console.log("Plane's next model is " + plane.model);

    if (plane.isJet) {
        console.log("Plane is a Jet")
    } else {
        console.log("Plane is not a Jet")
    }

    console.log("The plane flies in the below countries")
    console.log("----------------------")
    listCountries(["IN", "US", "UK"]);
}

printPlaneDetails({ make: "Indian Airline", model: 2021, isJet: false }, (countries: string[]) => {
    countries.forEach(country => {
        console.log(country);
    })
});