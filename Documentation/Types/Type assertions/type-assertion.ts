/*
? Type Assertion (The "as" keyword)

NOTES:
- You can assert certain types when TypeScript can't understand what type can be assigned.
*/

/*

? Example

- Here, document.getElementById could return HTMLElement or a HTMLCanvasElement.
- We need to assert the type to HTMLCanvasElement because TS doesn't know.
- Type assertions are also cleared when compiled to JS.
*/
const myCanvas = document.getElementById("my-canvas") as HTMLCanvasElement;

