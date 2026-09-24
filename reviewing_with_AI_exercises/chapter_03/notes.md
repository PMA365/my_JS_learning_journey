```
number => number*factor;
// equals to this :
(number) => {return number*factor}
```

1. Parentheses around a single parameter
   number => ... and (number) => ... do the exact same thing.

JavaScript lets you omit the parentheses if your arrow function only has one parameter. (If you have zero parameters or two or more, you must use parentheses, like () => or (a, b) =>).

2. Implicit Return vs. Explicit Return
   number => number \* factor uses an implicit return. When you omit the curly braces {}, JavaScript automatically assumes whatever is on the right side of the arrow is what you want to return.

(number) => { return number \* factor; } uses an explicit return. When you add curly braces {} to create a "block body," JavaScript requires you to write the return keyword if you want to send a value back.
