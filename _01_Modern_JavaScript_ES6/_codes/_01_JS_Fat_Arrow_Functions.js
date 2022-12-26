// In the global scope, `this` refers to the global object (e.g., window in a browser)
console.log(this); // outputs the global object

const obj = {
  message: 'Hello, world!',
  sayHello: function() {
    // Inside a function defined as an object method, `this` refers to the object itself
    console.log(this.message); // outputs "Hello, world!"
  }
};

obj.sayHello();
console.log(this.tagName);

const button = document.querySelector('button');
button.addEventListener('click', function() {
  // Inside an event listener, `this` refers to the element that fired the event
  console.log(this.tagName); // outputs "BUTTON"
  console.log(this);
});

