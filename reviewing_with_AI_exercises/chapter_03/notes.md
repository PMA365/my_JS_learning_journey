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
