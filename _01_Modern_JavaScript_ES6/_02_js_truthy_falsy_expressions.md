## JS: Truthy and Falsy Expressions

In JavaScript, a truthy value is a value that is considered "true" when evaluated in a boolean context. A falsy value is a value that is considered "false" when evaluated in a boolean context.

Here are the falsy values in JavaScript:

1. false
2. 0 (the number zero)
3. "" (empty string)
4. null
5. undefined
6. NaN (Not a Number)

All other values are considered truthy.

This means that the following code is unnecessary:

1. === undefined
2. === null
3. === true
4. === false
5. === 0

Here are a few examples to illustrate how truthy and falsy values work:

```js
if (true) {
  console.log("This will be executed");
}

if (1) {
  console.log("This will also be executed");
}

if (false) {
  console.log("This will not be executed");
}

if (0) {
  console.log("This will not be executed");
}

if ([]) {
  console.log("This will be executed");
}
```

In the first example, the value true is a truthy value, so the code inside the if block will be executed. In the second example, the value 1 is a truthy value, so the code inside the if block will also be executed. In the third and fourth examples, the values false and 0 are falsy, so the code inside the if block will not be executed. In the fifth example, the value [] (an empty array) is a truthy value, so the code inside the if block will be executed.

Falsy and truthy values are often used in conditional statements and other places where a boolean value is expected. It's important to understand how these values work in order to write correct and efficient code in JavaScript.

**Reference**:

1. https://www.sitepoint.com/javascript-truthy-falsy/
