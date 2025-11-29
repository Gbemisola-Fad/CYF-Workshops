
// Part 1: Without running code,
// Use documentation to evaluate Math.trunc() and Math.floor() for each of the numbers below.
// Write your answers down below:

// a) 10.53   For example, Math.trunc(10.53) evaluates to 10, Math.floor(10.53) evaluates to 10
// b) 170.105
// c) -0.34
// d) -8.921

// Part 2: Use the Node REPL to check your answers to Part 1)
// Part 3: Using Part 2, explain the difference between Math.trunc() and Math.floor() in your own words

// console.log(Math.trunc(10.53));     // Expected: 10
// console.log(Math.floor(10.53));     // Expected: 10

// console.log(Math.trunc(170.105));    // Expected: 170
// console.log(Math.floor(170.105));    // Expected: 170

// console.log(Math.trunc(-0.34));      // Expected: 0
// console.log(Math.floor(-0.34));      // Expected: -1

// console.log(Math.trunc(-8.921));     // Expected: -8
// console.log(Math.floor(-8.921));     // Expected: -9

// Math.trunc() simply removes any fractional digits and maintains the integer part, effectively truncating the number towards zero. For example, for negative numbers, it shifts towards the positive side; hence, Math.trunc(-8.921) yields -8.

// Math.floor() rounds down to the nearest whole number, meaning it always moves towards negative infinity. For the same negative example, Math.floor(-8.921) results in -9, which is lower than -8.

// Math.trunc() trims off the decimal and moves towards zero, whereas Math.floor() always rounds down, regardless of whether the value is negative or positive.



