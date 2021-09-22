/* 
? Special type | "any" 

NOTES:
- TypeScript also has a special type, any, that you can use whenever you don’t want a 
  particular value to cause typechecking errors.
- "any" is a bit unsafe to use.
*/

let car: any = {
    make: "Honda",
    model: 2009,
    sedan: false
}


/*
You can do whatever with this type. 
TS will not throw any error.
*/

// You can modify
car.accelerate = () => { console.log("burrp") }

// You can assign different type
car = "Hyundai"

// Even assigning it to wrong type will not cause error
const myCar: number = car;
