/*
? Anonymous Functions (Contextual typing)

- Typescript can spot bugs even in Anonymous functions.
*/

/*
  In the below examples, 
  "str" does not have a type annotation but still inferred from the context
*/

// Normal functions
// !Error - Property 'toLowercase' does not exist on type 'string'. Did you mean 'toLowerCase'?
(function (str) {
  console.log(str.toLowercase())
})("Hello");

// Arrow functions
// !Error - Property 'toLowercase' does not exist on type 'string'. Did you mean 'toLowerCase'?
((str) => {
  console.log(str.toLowercase())
})("Hello")
