
// Type alias of a Union
type Model = number | string;

/**
 * 
 * @param make - The plane manufacturer
 * @param model - The year of launch
 * @param isJet - Describes whether the plane is a jet or not
 * @param countries - List of countries supported
 * 
 * @return void (nothing)
 */
function printPlaneDetails(make: string, model: Model, isJet: boolean, countries: string[]): void {
    console.log("Plane manufacturer is " + make.toUpperCase());
    console.log("Plane's next model is " + model);

    if (isJet) {
        console.log("Plane is a Jet")
    } else {
        console.log("Plane is not a Jet")
    }

    console.log("The plane flies in the below countries")
    console.log("----------------------")
    countries.forEach(country => {
        console.log(country);
    })
}

printPlaneDetails("Indian Airline", 2021, false, ["IN", "US", "UK"]);