# Stopping TypeScript compilation
---
### Instructions

If you notice the ```index.ts``` file under assignments folder, we have introduced a type error when we call the function.

1. In your terminal, use the typescript compiler to generate the javascript file by running ```tsc <path_to_file>```. Make sure you replace the argument with the path to your ```.ts``` file.
2. Notice that even with the typescript error, we still got a javascript file ```index.js``` which pretty much looks the same.
3. Try running the ```index.js``` javascript file in your terminal using ```node <path_to_js_file```>. This time you will see a runtime error in the console.
4. Delete the ```index.js``` file.
5. Stop the typescript compiler from generating the javascript file if there are errors. You can do this by appending ```--noEmitOnError``` flag when you build. Run ```tsc --noEmitOnError <path_to_ts_file>```.

Notice that this time, the ts compiler will not generate the javascript file.