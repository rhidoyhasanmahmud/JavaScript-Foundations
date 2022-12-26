In JavaScript, you can use default parameters to specify default values for function arguments. This allows you to provide a default value for an argument in case it is not provided when the function is called.

Here's an example of a function with a default parameter:

```js
function greet(name = "user") {
  console.log(`Hello, ${name}!`);
}

greet(); // outputs "Hello, user!"
greet("Hasan"); // outputs "Hello, Hasan!"
```

In this example, the greet() function has a default parameter name with a default value of 'user'. If the name argument is not provided when the function is called, the default value of 'user' is used.

You can also use expressions as default values for function parameters. For example:

```js
function add(x = 1, y = x + 1) {
  console.log(x + y);
}

add(); // outputs 3 (1 + (1 + 1))
add(2); // outputs 5 (2 + (2 + 1))
add(3, 4); // outputs 7 (3 + 4)
```

In this example, the add() function has two default parameters, x and y. The default value of y is x + 1, which means that the value
