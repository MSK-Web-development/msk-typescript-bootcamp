/**
 *
 * @param plane - An object describing all the plane details
 *
 * @return void (nothing)
 */
function printPlaneDetails(plane, listCountries) {
    console.log("Plane manufacturer is " + plane.make.toUpperCase());
    console.log("Plane's next model is " + plane.model);
    if (plane.isJet) {
        console.log("Plane is a Jet");
    }
    else {
        console.log("Plane is not a Jet");
    }
    console.log("The plane flies in the below countries");
    console.log("----------------------");
    listCountries(["IN", "US", "UK"]);
}
printPlaneDetails({ make: "Indian Airline", model: 2021, isJet: false }, function (countries) {
    countries.forEach(function (country) {
        console.log(country);
    });
});
