The result of the expression

```
undefined > 0
```

is false
Why does this happen?
Type Conversion: When you use a relational operator like > on undefined,
JavaScript tries to convert undefined into a number.
The Result of Conversion: Number(undefined) evaluates to NaN (Not a Number).

#### The Rule of NaN:

In JavaScript, any comparison involving NaN (>, <, >=, <=) always returns false.
The same thing happens with < and >=:
undefined > 0 false
undefined < 0 false
undefined == 0 false
(though
undefined == null
is a special case that returns true)

---

### What Are Falsy Values?

Falsy values are values that evaluate to false when used in a Boolean. JavaScript has a fixed list of falsy values

false
0 (and -0)
0n (BigInt zero)
"" (empty string)
null
undefined
NaN

### What Are Truthy Values?

Truthy values are values that are evaluated to be true when used in a Boolean context. Simply put, any value that is not explicitly falsy is considered truthy.

These are some truthy values

Non-zero numbers: 42, -1, 3.14
Non-empty strings: "hello", "0", " "
Objects and arrays: {}, []
Functions: function() {}
Dates: new Date()
Symbols: Symbol()
BigInt values other than 0n: 10n

```
if (42) console.log("This is truthy!");
if ("hello") console.log("Non-empty strings are truthy!");
if ({}) console.log("Objects are truthy!");
if (-1) console.log("Truthy"); // Truthy
```

---

&& (AND): Returns the first falsy operand or the last operand if all are truthy.

|| (OR): Returns the first truthy operand or the last operand if all are falsy.

```
console.log(true && "JavaScript"); // JavaScript


console.log(false || "Hello!"); //Hello!
console.log( 0 || null); //null
```

---

### Important note of %

the Remainder of 10.5 / 1 in real math is 0 zero
but in JavaScript bc the JavaScript calculates how many times B can completely (as an integer) fit into A, and then returns whatever is left over.

جاوااسکریپت بررسی می‌کند که عدد A چند بار به طور کامل (صحیح) بر B بخش‌پذیر است، و سپس چیزی را که باقی می‌ماند به شما خروجی می‌دهد.

Essentially, this operator tells you how much is left over after removing all complete
chunks of 1 from 10.5. The answer is 0.5.

ر واقع، این عملگر به شما می‌گوید پس از برداشتن تمام قالب‌های ۱ تایی کامل از عدد ۱۰.۵، چه مقدار باقی مانده است؟ پاسخ ۰.۵ است.

```js
console.log(10.5 % 1); // -> 0.5
```
