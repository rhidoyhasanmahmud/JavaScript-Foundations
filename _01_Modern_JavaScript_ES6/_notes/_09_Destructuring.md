In JavaScript, destructuring is a way to extract values from arrays or objects and assign them to variables. It is a convenient and concise way to extract values from data structures and simplify your code.

Here's an example of destructuring an array:

```js
const numbers = [1, 2, 3];
const [x, y, z] = numbers;
console.log(x); // outputs 1
console.log(y); // outputs 2
console.log(z); // outputs 3
```

In this example, the numbers array is destructured into three variables: x, y, and z. The values of the first, second, and third elements of the numbers array are assigned to x, y, and z, respectively.

You can also use destructuring to assign default values to variables. For example:

```js
const numbers = [1, 2];
const [x, y, z = 3] = numbers;
console.log(x); // outputs 1
console.log(y); // outputs 2
console.log(z); // outputs 3
```

In this example, the numbers array only has two elements, so the value of the third element is undefined. However, we have assigned a default value of 3 to the z variable, so it is set to 3 if the value is not provided.

You can also use destructuring to extract values from objects. For example:

```js
const person = {
  name: "John",
  age: 30,
};
const { name, age } = person;
console.log(name); // outputs "John"
console.log(age); // outputs 30
```

In this example, the person object is destructured into two variables: name and age. The values of the name and age properties of the person object are assigned to name and age, respectively.

Destructuring is a powerful feature in JavaScript that can help you write more concise and readable code. It is especially useful when working with complex data structures such as arrays and objects.
