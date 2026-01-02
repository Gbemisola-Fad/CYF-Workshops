let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret,'x'.repeat(secret.length));


// a) How many function calls are there in this file?
// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing
// c) How many inputs do we pass to replaceAll when we call it? How can you tell?
// d) How any inputs do we pass to repeat when we call it?  How can you tell?
// e) What kind of statement is on line 7?

// a) There are two functions
// confession.replaceALL(secret.length)
// 'x'.repeat(secret.length)

// b) The expression does 
// secret holds the value "cake".
// 'x'.repeat(secret.length): This part creates a string of 'x' characters, with a length equal to that of secret. the "cake" has a length of 4, 
// this will produce "xxxx". confession.replaceAll(secret, 'x'.repeat(secret.length)) 
// This replaces all occurrences of "cake" in the confession string with "xxxx"

// c) The substring to be replaced (secret, which is "cake").
// The replacement string ('x'.repeat(secret.length), which resolves to "xxxx").

// d) We pass 1 input to repeat
// There is only one value inside the parentheses
// repeat is defined to take a single number indicating how many times to repeat the string

// e) This is an assignment statement.
