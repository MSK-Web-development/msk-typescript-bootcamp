/*
? Specifying rest parameters

NOTES:
- Tuple with rest parameter elements (Must be Array / Tuple)
*/

type CarTuple = [number, string, ...number[]];
const myCar: CarTuple = [2021, "Ford", 123, 456, 789]


function printCarDetails(myCar: [number, string, ...number[]]) {
    console.log(myCar[3])
}

printCarDetails([2021, "Ford", 123, 456, 789])