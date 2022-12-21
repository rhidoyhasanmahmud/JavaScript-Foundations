The rest operator (...) is a JavaScript operator that allows you to represent an indefinite number of arguments as an array. It is often used in function declarations to capture all remaining arguments after a certain point.

Here's an example of using the rest operator in a function declaration:

```js
function sum(x, y, ...rest) {
  let result = x + y;
  for (const num of rest) {
    result += num;
  }
  console.log(result);
}

sum(1, 2, 3, 4, 5); // outputs 15
```

In this example, the sum() function has three parameters: x, y, and ...rest. The rest parameter is preceded by the rest operator, which tells JavaScript to capture all remaining arguments as an array. The rest parameter will contain an array of all the arguments after x and y.

In this case, the sum() function is called with five arguments: 1, 2, 3, 4, and 5. The x parameter is assigned the value 1, the y parameter is assigned the value 2, and the rest parameter is assigned an array containing [3, 4, 5]. The sum() function then iterates over the elements of the rest array and adds them to the result.

The rest operator is a convenient way to handle an indefinite number of arguments in a function declaration. It allows you to write more flexible and reusable functions that can accept a variable number of arguments.

**JavaScript Rest vs Spread Operator**

The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array. But the spread syntax expands iterables into individual elements.
