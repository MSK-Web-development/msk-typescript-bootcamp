/*
? Rest Parameters and Arguments

- In JS, rest params (array) can be declared with three dots ( ... )
- Implicit type for rest params is any[]
- Using rest arguments may require turning on "downlevelIteration" when targeting older runtimes.
*/

// Let's define a Car type
type Car = {
    make: string,
    model: number
}

// Here ...models is the rest syntax
function getCarsFromModels(make: string, ...models: number[]): Car[] {
    return models.map(model => {
        return {
            make,
            model
        }
    })
}

// Inferred as 3-length tuple
const carModels = [2021, 2020, 2009] as const;

// Here we used the spread syntax
const myCars = getCarsFromModels("BMW", ...carModels)



