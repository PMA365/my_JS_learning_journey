# Values,Types, and Operators

# Important Notes

JavaScript uses a fixed number of bits, 64 of them, to store a single number value

Newlines (the characters you get when you press ENTER) can be included only when the string is quoted with backticks (`).

```
console.log(`hi
	my friend
	how are you today!?`);
```

For creating tab or ented(new line) inside the "" or '' we should use the \t \n and the \ will not show up. if we want to show \ we should use 2 of them like \\
and for the showing " or ' we just use \ behind them like \" \'

```
"He said: \"take care \" \n and he also said \" be careful about the things outside\""
```

---

JavaScript’s representation uses 16 bits per string element

Unicode defines more characters than that about twice as many, at this point. So some characters, such as many emoji, take up two “character positions” in JavaScript strings

---

Operators that use two values are called binary operators, while those that take one are called unary operators. The minus operator (-) can be used both as a binary operator and as a unary operator.

```
// typeof is also a unary operator :
console.log(typeof 4.5) // → number

console.log(- (10 - 2)) // → -8
```

---

There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”)

console.log(NaN == NaN) // → false

---

### Whats the difference between null and undifined ?

undefined = JavaScript hasn’t given it a value yet
null = You intentionally set it to nothing
null == undefined is true but null === undefined is false
undefined :
A variable is declared but not assigned:
js
let x;
console.log(x); // undefined
A function doesn’t return anything:

function test() {}
console.log(test()); // undefined

Accessing a missing object property:

```
const obj = {};
console.log(obj.name); // undefined
```

can a developer also set undifuned as value for a variable?
Yes — a developer can set undefined manually, but it’s not recommended in modern JavaScript. And there’s a good reason for that :

```
let x = undefined;
```

This works, but it’s considered bad practice because:
undefined is meant to signal “not assigned yet”
JavaScript itself uses undefined automatically
Setting it manually can make debugging harder

---

🧠 Precedence order (highest → lowest among the operators used) \* (multiplication)
\+ (addition)
\> and == (comparison operators — same level)
&& (logical AND)
||

```
console.log(1 + 1 == 2 && 10 * 10 > 50) -> true
```

---

Exactly 7 falsy values:

```
false

0 and -0

"" (empty string)

null

undefined

NaN
```

👉 Any of these convert to false in Boolean contexts (like if, &&, ||).

In the case of true || X,
no matter what X is—even if it’s a piece of program that does something terrible—the result will be true, and X is never evaluated. The same goes for false && X, which is false and will ignore X. This is called short-circuit evaluation.

The conditional operator(Ternary operator) works in a similar way. Of the second and third values, only the one that is selected is evaluated.

?? Nullish Coalescing Operator
