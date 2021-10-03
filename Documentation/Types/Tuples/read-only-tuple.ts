/*
? A Readonly Tuple
*/

type RaceCarTuple = readonly [number, string];
const raceCar: RaceCarTuple = [2021, "BMW"];

raceCar[1] = "Lambo";