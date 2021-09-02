//* Using multiple Generic Types
function getLatestCarDetails<Make, Model>(make: Make, allModels: Model[]): Model {
    console.log(`Car manufacturer is ${make}`)
    return allModels[0];
}

getLatestCarDetails("Ford", [2021, 2020, 2019]);