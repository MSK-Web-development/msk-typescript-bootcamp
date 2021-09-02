/* 
? "unknown" is a special type.

  - It is similar to "any" type.
*/

let a: unknown = document.getElementById("my-element");

// You can do whatever you want with any type
function getLatestCarModelV1(models: any) { return models[0] }

// BUT, You cannot do whatever you want with "unknown" type. 
// Hence it is safer.
function getLatestCarModelV2(models: unknown) { return models[0] }