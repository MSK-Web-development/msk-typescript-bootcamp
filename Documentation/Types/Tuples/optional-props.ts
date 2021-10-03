/*
? Tuples with Optional properties

NOTES:
- Tuple with optional property. (only allowed at the end)
*/

type PlaneDetailsTuple = [number, string, boolean?];
const myPlane: PlaneDetailsTuple = [2021, "Indian Airline"]