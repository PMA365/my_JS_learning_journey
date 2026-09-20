In JavaScript, starting a variable name with **`$` (dollar sign)** or **`_` (underscore)** is a stylistic choice used by developers to communicate a specific meaning or intent. JavaScript treats both symbols as normal letters, so they have no special mechanical powers, but they follow strong community conventions.

Here is exactly when and why you should use each one.

---

### 1. When to use `_` (Underscore) at the start

The prefix `_` is a universal signal meaning: **"This is private or internal. Please do not touch it from the outside."**

- **Simulating Private Properties (Legacy & Conventions):** Before JavaScript introduced native private fields (using `#`), developers used an underscore to warn others not to access a property directly.
  ```javascript
  class BankAccount {
  	constructor(balance) {
  		this._balance = balance; // Intended to be private
  	}

  	// Public method to safely access it
  	getBalance() {
  		return this._balance;
  	}
  }
  ```
- **Unused Parameters:** In callbacks or loops, if a function forces you to accept an argument you don't plan to use, developers name it `_` to clean up the code.
  ```javascript
  // We only care about the 'value', not the 'index'
  array.forEach((value, _) => {
  	console.log(value);
  });
  ```

---

### 2. When to use `$` (Dollar Sign) at the start

The prefix `$` is usually a signal meaning: **"This variable holds something special, an external reference, or an active stream."**

- **DOM (HTML) Elements (Very Common):** When using vanilla JavaScript or jQuery, developers prefix variables with `$` if they hold a reference to an HTML element. This makes it instantly clear that you can call DOM methods on it.

  ```javascript
  const $submitButton = document.querySelector("#submit-btn");
  const $emailInput = document.querySelector(".email-field");

  // Later in code, you instantly know these are HTML elements:
  $submitButton.disabled = true;
  ```

- **Observables or Streams (RxJS):** In reactive programming, variables that represent an asynchronous data stream (Observables) are suffixed or prefixed with `$` (often called "Finnish Notation").
  ```javascript
  const dataStream$ = tpsSource.pipe();
  ```

---

### Direct Summary Comparison

| Prefix                | Common Meaning                                                 | Typical Example                                     |
| :-------------------- | :------------------------------------------------------------- | :-------------------------------------------------- |
| **`_` (Underscore)**  | **Internal/Private** value or an **unused** function argument. | `this._internalId = 42;`                            |
| **`$` (Dollar Sign)** | **DOM/HTML element** reference or a special library object.    | `const $header = document.querySelector('header');` |
