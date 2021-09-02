/*
? Declaring object types

- There are 3 ways of declaring object type in TS
*/

//* 1. Anonymous
function printCarDetailsV1(myCar: { make: string, model: number }) {
    console.log(myCar.make);
    console.log(myCar.model);
}

//* 2. Named type alias
type CarType = {
    make: string,
    model: number
}
function printCarDetailsV2(myCar: CarType) {
    console.log(myCar.make);
    console.log(myCar.model);
}

//* 3. Named Interface
interface CarInterface {
    make: string;
    model: number
};
function printCarDetailsV3(myCar: CarInterface) {
    console.log(myCar.make);
    console.log(myCar.model);
}