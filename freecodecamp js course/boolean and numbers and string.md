```js
const infiniteNumber = 1 / 0;
console.log(infiniteNumber); // Infinity
console.log(typeof infiniteNumber); // number

const notANumber = "hello world" / 2;
console.log(notANumber); // NaN

const notANumber = "hello world" / 2;
console.log(typeof notANumber); // number

// Surprisingly, the type of NaN is also Number:
```

---

Hexadecimal is a base-16 system that uses digits 0 to 9 and letters a to f, like you see in CSS hex colors

```js
const exponent = num1 ** num2;
console.log(exponent); // 8
```

When you use + with a number and a string, JavaScript decides to treat them both as **strings** and joins them together

```js
const result = 5 + "10";

console.log(result); // 510
console.log(typeof result); // string
```

### Things get more interesting when you try to perform other arithmetic operations like subtraction, multiplication, or division with a string and number.

In these cases, JavaScript tries to convert the string into a number before doing the math – another type coercion! Here's what happens:

```js
const subtractionResult = "10" - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = "10" * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = "20" / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number
```

But what if the string doesn't look like a number? Let's see what happens in that case:

```js
const subtractionResult = "abc" - 5;
console.log(subtractionResult); // NaN
console.log(typeof subtractionResult); // number

const multiplicationResult = "abc" * 2;
console.log(multiplicationResult); // NaN
console.log(typeof multiplicationResult); // number

const divisionResult = "abc" / 2;
console.log(divisionResult); // NaN
console.log(typeof divisionResult); // number
```

What if you perform arithmetic operations with a boolean (true or false)? Let's see what happens. JavaScript treats booleans as numbers in mathematical operations: true becomes 1, and false becomes 0.

```js
const result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

const result3 = "Hello" + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string
```

### For null and undefined, JavaScript treats null as 0 and undefined as NaN in mathematical operations:

```js
const result1 = null + 5;
console.log(result1); // 5
console.log(typeof result1); // number

const result2 = undefined + 5;
console.log(result2); // NaN
console.log(typeof result2); // number
```

Understanding these conversions is crucial for avoiding bugs and writing robust code in your projects.
