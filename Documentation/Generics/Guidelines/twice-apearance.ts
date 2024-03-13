/*
? Type Parameters Should Appear Twice to make sense

- Type parameters are for relating the types of multiple values. 
- If a type parameter is only used once in the function signature, why do you need them ?
*/

//! There is only 1 type. Why do you need Generics ?
function printCarNameV1<Type extends string>(make: Type) {
    console.log(`My car is ${make}`);
};
printCarNameV1("BMW")


//* Better way to write the above function
function printCarNameV2(make: string) {
    console.log(`My car is ${make}`);
}
printCarNameV2("Ford")



