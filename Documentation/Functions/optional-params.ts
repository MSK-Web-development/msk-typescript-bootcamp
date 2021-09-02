/*
? Optional parameters

- Parameter can be marked optional with a "?"
- However, passing optional params can lead to errors.
*/

function createNewCarModels(count?: number) {
    //! Error - Object is possibly 'undefined'
    console.log(count++);

    // The actual logic
    if (count) {
        return new Array(count++);
    } else {
        return new Array(1);
    }
}

// The param type "count" is undefined
const modelsV1 = createNewCarModels();

// The param type "count" is number
const modelsV2 = createNewCarModels(10);


