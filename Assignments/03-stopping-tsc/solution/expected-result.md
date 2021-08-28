# Expectation
---
#### First time, when you compile the ```index.ts``` file, you should see below message in the console. However, the ```index.js``` file still gets generated.
---
```
Argument of type 'string' is not assignable to parameter of type 'number'.

19 printCarDetails("Hyundai", "2009", false)
                              ~~~~~~

Found 1 error.
```

#### Next time, after compiling with the ```--noEmitOnError``` flag, the compiler should not generate the ```index.js``` file.