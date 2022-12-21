**Ternary Operator**

The ternary operator is a simplified conditional operator like if / else.

Syntax: condition ? <expression if true> : <expression if false>

The ternary operator (also known as the conditional operator) is a way to write a simple if-else statement in a single line of code. It is a shorthand way to write a conditional expression, which consists of a boolean condition followed by two expressions separated by a ? and :.

Here's an example of a simple if-else statement:

```js
let result;
if (x > y) {
  result = "x is greater than y";
} else {
  result = "x is not greater than y";
}
```

This code can be written using the ternary operator as follows:

```js
let result = x > y ? "x is greater than y" : "x is not greater than y";
```

The ternary operator is often used as a shorthand way to write simple if-else statements. It can make your code more concise and easier to read, especially when you only need to perform a simple action based on a boolean condition.

Here's another example that demonstrates how the ternary operator can be used:

```js
const color = x > y ? "red" : "blue";
```

This code will set the value of the color variable to 'red' if x is greater than y, and 'blue' otherwise.

It's important to note that the ternary operator is only suitable for simple if-else statements. For more complex conditions, it's usually better to use a full if-else statement or a switch statement.
