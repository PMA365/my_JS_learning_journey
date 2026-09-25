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

---

# Understanding Closures in JavaScript

## Why Closures Were Created

In JavaScript, variables normally disappear as soon as the function that created them finishes running. This is because of garbage collection and scope rules.

However, developers frequently need a way for a function to **"remember"** outer variables even after the outer function has closed or returned. Creators introduced closures so that inner functions could maintain a persistent, private connection to their outer scope. Think of a closure as a backpack that a function carries around, packed with the variables it needs from its birthplace.

---

## Real-World Example: A Private Bank Account or Counter

The most practical, real-world use case for closures is **data privacy**. JavaScript doesn't have a built-in `private` keyword like other languages, so closures let us hide data so it can't be messed with from the outside.

```javascript
function createBankAccount(initialBalance) {
	let balance = initialBalance; // This variable is hidden (private)

	return {
		deposit: function (amount) {
			balance += amount;
			return balance;
		},
		withdraw: function (amount) {
			if (amount > balance) return "Insufficient funds";
			balance -= amount;
			return balance;
		},
		getBalance: function () {
			return balance;
		},
	};
}

const myAccount = createBankAccount(100);

console.log(myAccount.deposit(50)); // 150
console.log(myAccount.withdraw(30)); // 120
console.log(myAccount.balance); // undefined (It's completely private!)
```

---

# Why Arrow Functions Were Created

Arrow functions were introduced in ES6 (2015) to solve two major pain points of regular functions: **verbose syntax** and **`this` keyword confusion**.

---

## 1. Shorter Syntax & Less Boilerplate

Writing simple operations with regular functions required typing the `function` keyword, parentheses, curly braces, and the `return` keyword. Arrow functions offer a clean, concise syntax—which is especially useful for array methods like `.map()`, `.filter()`, and `.reduce()`.

### Example: Array Mapping

```javascript
// Regular Function (Verbose)
const prices = [10, 20, 30];
const doubledRegular = prices.map(function (price) {
	return price * 2;
});

// Arrow Function (Concise with implicit return)
const doubledArrow = prices.map((price) => price * 2);
```

# Pre-ES6 Workarounds for the `this` Keyword Bug

Before arrow functions were introduced in ES6 (2015), developers had to use explicit workarounds to fix the `this` context bug in nested functions, callbacks, and timers (like `setTimeout`).

Here are the two most common techniques developers used:

---

## 2. Lexical this (Fixing the this Context Bug)

Regular functions create their own dynamic this context based on how they are called. This caused notorious bugs in callbacks, event listeners, and timers (like setTimeout), where this would accidentally point to the global window or become undefined.

# Pre-ES6 Workarounds for the `this` Keyword Bug

Before arrow functions were introduced in ES6 (2015), developers had to use explicit workarounds to fix the `this` context bug in nested functions, callbacks, and timers (like `setTimeout`).

Here are the two most common techniques developers used:

---

### 1. The `self = this` (or `that = this`) Hack

Because regular functions create their own `this`, developers would capture the outer `this` in a variable (usually named `self` or `that`) before entering the inner function. Thanks to **closures**, the inner function could remember that `self` variable.

### Example: Using `self = this`

```javascript
const userProfile = {
	username: "Bahador",
	status: "Offline",
	login: function () {
		// Step 1: Capture 'this' in a variable
		const self = this;

		setTimeout(function () {
			// Step 2: Use 'self' instead of 'this'
			self.status = "Online";
			console.log(self.username + " is now " + self.status);
		}, 1000);
	},
};

userProfile.login();
```

### 2. Using .bind(this)

Every JavaScript function has a built-in method called .bind() that allows you to explicitly lock what this should point to.

Example: Using .bind(this)

```
const userProfile = {
    username: "Bahador",
    status: "Offline",
    login: function() {
        setTimeout(function() {
            this.status = "Online";
            console.log(this.username + " is now " + this.status);
        }.bind(this), 1000); // <-- Manually locking 'this' to userProfile
    }
};

userProfile.login();
```

---

---

# Understanding Recursion in JavaScript: The Factorial Example

Recursion is a function that **calls itself** to solve a problem. It can feel like magic, especially when trying to understand how math like `3 * 2 * 1` happens when the code seemingly only returns `1`.

---

## 1. The Bug: Why Global State is Dangerous

A common beginner mistake is using an external or global variable to keep track of the total across recursive calls.

### The Problem Code:

```javascript
let total = 1;

function buggyFactorial(inputNum) {
	if (inputNum == 0) {
		return total;
	}
	total = inputNum * total;
	return buggyFactorial(inputNum - 1);
}

console.log(buggyFactorial(5)); // Output: 120 (Looks correct!)
console.log(buggyFactorial(5)); // Output: 14400 (WRONG! Because 'total' kept its old value)
```

### Why it fails:

Because `total` lives outside the function, it remembers its value between runs. Calling the function a second time multiplies against the left-over value from the first call, leading to bugs.

---

## 2. The Clean & Idiomatic Way

Instead of using a global variable, we let return values pass the math back up through the call stack safely.

```javascript
function recursiveFactorial(inputNum) {
	// Base case: 0! or 1! is 1
	if (inputNum === 0 || inputNum === 1) {
		return 1;
	}

	// Recursive step: multiply current number by the result of the next smaller number
	return inputNum * recursiveFactorial(inputNum - 1);
}

console.log(recursiveFactorial(5)); // Output: 120
console.log(recursiveFactorial(5)); // Output: 120 (Safe to call again!)
```

---

## 3. How It Works: The Two Phases of Recursion

When you run `recursiveFactorial(3)`, it feels mysterious how it computes `3 * 2 * 1`. Recursion happens in **two distinct phases**:

### Phase 1: Going Down (Building the Stack)

The function pauses execution at each step because it has to wait for the next function call to finish before it can complete its multiplication.

1. **`recursiveFactorial(3)`** runs $\rightarrow$ tries to return `3 * recursiveFactorial(2)` _(Pauses and waits)_
2. **`recursiveFactorial(2)`** runs $\rightarrow$ tries to return `2 * recursiveFactorial(1)` _(Pauses and waits)_
3. **`recursiveFactorial(1)`** runs $\rightarrow$ hits the base case and **returns `1`**.

### Phase 2: Coming Back Up (The Unwinding)

Now that we hit the bottom and got our `1`, the paused functions can finally finish their math, working their way **back up**:

1. **`recursiveFactorial(1)`** gave back `1`.
2. **`recursiveFactorial(2)`** finishes: `2 * 1 = 2` (returns `2` to the caller).
3. **`recursiveFactorial(3)`** finishes: `3 * 2 = 6` (returns final answer `6`).

> **Summary:** The function doesn't do the multiplication on the way down; it sets up the math problems (`3 *`, `2 *`), hits the bottom (`1`), and solves them on the way back up!
