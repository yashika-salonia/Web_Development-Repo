//Numbers
let score=100
console.log(score); //100

let balance = new Number(100)
console.log(balance); //[Number: 100]
console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00

const num=123.89433
//Rounding off to the nearest no as given in the function 
console.log(num.toPrecision(3));

const hundreds=1000000
// In International number system
console.log(hundreds.toLocaleString()); //1,000,000
//In Indian number system
console.log(hundreds.toLocaleString('en-IN')); //10,00,000

//Maths

console.log(Math);
console.log(Math.abs(-56)); //returns absolute(+ve) value of a number
console.log(Math.round(4.6) ); //5 => rounds up or down to the nearest whole number
console.log(Math.ceil(4.2) ); //5 => always rounds up to the nearest whole number
console.log(Math.floor(4.7) ); //4 => always rounds down to the nearest whole number
console.log(Math.max(5,10,15)); //15 
console.log(Math.min(5,10,15)); //5

//To generate random no
console.log(Math.random()); //Random no is between 0 and 1
console.log((Math.random()*10)+1); //0.
console.log(Math.floor(Math.random()*10)+1); 

//To get a random no b/w 10 to 20 
let min=10
let max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))
//(max-min+1) sets a range and skips the 0 value by adding 1 in them
//adding min in this line varifies the above set condition i.e. min should be atleast 10 
//floor function rounds down to the nearest whole number