/* 
? Special type | "unknown" 

NOTES:
  - It is similar to "any" type.
  - It is a 'little bit" safer than "any" type
*/

let a: unknown = document.getElementById("my-element");

// You can do whatever you want with any type
function getLatestCarModelV1(models: any) { return models[0] }

// BUT, You cannot do whatever you want with "unknown" type. 
// Hence it is safer.
function getLatestCarModelV2(models: unknown) { return models[0] }