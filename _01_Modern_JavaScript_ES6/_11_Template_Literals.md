In JavaScript, template literals are a type of string literal that allow you to embed expressions and variables inside a string. They are denoted by a backtick (`) and use the ${expression} syntax to embed expressions.

Here's an example of using a template literal to embed a variable in a string:

```js
const name = "John";
console.log(`Hello, ${name}!`); // outputs "Hello, John!"
```

In this example, the template literal Hello, ${name}! contains an expression ${name} that is replaced with the value of the name variable when the string is evaluated. The output is "Hello, John!".

You can also use template literals to embed complex expressions in a string. For example:

```js
const x = 10;
const y = 20;
console.log(`The sum of ${x} and ${y} is ${x + y}.`); // outputs "The sum of 10 and 20 is 30."
```

In this example, the template literal The sum of ${x} and ${y} is ${x + y}. contains two expressions, ${x} and ${y}, that are replaced with the values of the x and y variables, respectively. It also contains an expression ${x + y} that is replaced with the result of x + y. The output is "The sum of 10 and 20 is 30."

Template literals are a convenient and concise way to embed expressions and variables in strings. They are particularly useful when you want to create dynamic strings that are based on the values of variables or expressions.
