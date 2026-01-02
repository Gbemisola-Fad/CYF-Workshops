

const day = "Friday";
const month = "September";
const date = 29;
const time = "21:49";
day.slice(0, 3)

month.slice(0, 3)
const macTimeDisplay = `${day.slice(0,3)} ${date} ${month.slice(0,3)} ${time}`;

// Before running code, answer the following - write down your answers:
// a) how many function calls are there in this file?
// b) predict and explain what macTimeDisplay will evaluate to. You can use documentation to look up slice

// a) There are 2 function calls in this file.
// day.slice(0, 3)
// month.slice(0, 3)

// b) day.slice(0, 3)
// "Friday" or "Fri"
// month.slice(0, 3)
// "September" or "Sep"

// When used inside a template literal, date (a number) is automatically converted to a string.


