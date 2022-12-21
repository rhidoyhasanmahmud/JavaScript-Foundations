let array1 = ["one", "two", "three", "four"]
let array2 = ["five", "six", "seven"]

// Spread operator
let finalArray = [...array1, ...array2]
console.log(finalArray)
// output: ["one", "two", "three", "four", "five", "six", "seven"]

// rest operator
let [first, ...rest] = array1
console.log(first) //output:  one
console.log(rest)  // output: ["two", "three", "four"]