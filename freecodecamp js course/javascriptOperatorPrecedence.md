# JavaScript Expression Evaluation

The expression **`1 + 1 == 2 && 10 * 10 > 50`** evaluates to **`true`** in JavaScript.

The calculation follows strict rules of **operator precedence** and **short-circuit evaluation**.

---

## Step-by-Step Breakdown

### 1. Arithmetic Operators (`*` and `+`)

Arithmetic operators have the highest priority in this expression, with multiplication ranking above addition.

- **Multiplication first:** `10 * 10` is evaluated first, resulting in `100`.
  - _Expression becomes:_ `1 + 1 == 2 && 100 > 50`
- **Addition second:** `1 + 1` is evaluated next, resulting in `2`.
  - _Expression becomes:_ `2 == 2 && 100 > 50`

### 2. Comparison Operators (`>` and `==`)

Relational operators (`>`) have higher precedence than equality operators (`==`).

- **Relational comparison:** `100 > 50` is evaluated, resulting in `true`.
  - _Expression becomes:_ `2 == 2 && true`
- **Equality comparison:** `2 == 2` is evaluated, resulting in `true`.
  - _Expression becomes:_ `true && true`

### 3. Logical Operator (`&&`)

- **Logical AND:** Since both sides are `true`, the final result is **`true`**.

---

## Implicit Grouping

GitHub Markdown visualizes the implicit operator grouping like this:

```js
1 + 1 == 2 && 10 * 10 > 50;
```
