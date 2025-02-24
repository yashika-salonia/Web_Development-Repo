//ternary operators
let age = 20;
let result = age > 18 ? 'Adult' : 'Kid';
console.log(result);

//guard operator - used when a fallback value is needed
let marks;
let finalMarks=marks || 33;
console.log(marks)
console.log(finalMarks);

//default operator - coniders only null and undefined as falsy values
let name = '';
let greeting = name ?? "Guest";
console.log(name);