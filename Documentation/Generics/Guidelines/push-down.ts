/*
? Push Type Parameters Down

- When possible, use the type parameter itself rather than constraining it
*/

//* First way
function getLatestCarModelV1<Type>(models: Type[]) {
    return models[0];
}

//* Second way
function getLatestCarModelV2<Type extends any[]>(models: Type) {
    return models[0];
}

//* Good coding practice 
// Type of result1 is "number" 
const result1 = getLatestCarModelV1([2021, 2020, 2009])

//! Bad coding practice 
// Type of result2 is "any"
const result2 = getLatestCarModelV2([2021, 2020, 2009])


