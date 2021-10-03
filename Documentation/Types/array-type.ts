/*  
? Array type

NOTES:
- Can be declared by adding brackets[] to type names.
*/

// Examples
const cars: string[] = ["hyundai", "honda"];
const luckyNumbers: number[] = [1, 2, 3];
const answers: boolean[] = [true, false];

function printCarModels(models: number[]): number {
    models.forEach(model => {
        console.log(model)
    })

    let upcomingModel = models[0] + 1;
    return upcomingModel;
}

let upcomingModel = printCarModels([2021, 2020, 2018])
console.log("Next upcoming model is " + upcomingModel)

