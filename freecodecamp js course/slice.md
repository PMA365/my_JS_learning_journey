```
string.slice(startIndex, endIndex);
```

startIndex is the position where the extraction starts. endIndex is where the extraction ends. If not provided, slice() extracts until the end of the string.

```
let message = "Hello, world!";
let world = message.slice(7);

console.log(world);  // world!
```

also ...

```
let message = "JavaScript is fun!";
let lastWord = message.slice(-4);

console.log(lastWord);  // fun!
```

In this case, slice(-4) extracts the last four characters from the string, giving us fun!.
