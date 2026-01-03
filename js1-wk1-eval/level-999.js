
// Without running code,
// predict and explain what will get logged to the console for each line below
// think carefully about the difference between each line
// write down your predictions
// Look up documentation for Math.abs if you've not used it before

console.log(Math.abs);
console.log(Math.abs());
console.log(Math.abs(-100));

// Run the file with Node to check your answer

// [Funtion: abs] - A reference to the function itself.
// NaN - JavaScript tries to convert undefined to a number. Number(undefined) results in NaN. The absolute value of NaN is still NaN.So the function returns NaN.
// 100 - Math.abs(x) returns the absolute value of a number. The absolute value of -100 is 100.

