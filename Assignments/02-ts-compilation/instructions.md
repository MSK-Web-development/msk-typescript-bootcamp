# The TypeScript Compiler
---
### instructions

1. Install the typescript compiler node module globally. Just run this command in your terminal ```npm install -g typescript```
2. There is a file called ```index.ts``` in assignments folder which contains some typescript code. Observe the type annotations.
3. In your terminal, use the typescript compiler to generate the javascript file by running ```tsc <path_to_file>```. Make sure you replace the argument with the path to your ```.ts``` file
4. Run the ```index.js``` javascript file in your terminal using ```node <path_to_js_file```> and you should see the output in the console.
---
Notice that the newly generated ```index.js``` file does NOT have any typescript annotations. They have been erased ! This is because the browser doesn't understand typescript code.