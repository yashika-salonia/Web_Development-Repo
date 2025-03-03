//Datatypes in Javascript

//Primitive Data Types: Number, String, boolean, undefined, null.

//number=> integer values
let age=15
// BigInt => for storing big numbers
let no=233456
//string => "Hello World" or 'Hello World'
let str="John"
//boolean => true/false
let isPass=true;
//null => standalone value
let obj=null;
//undefined => not assigned
let x;
console.log(typeof x);
//symbol => unique
let sym=Symbol("name");
console.log(typeof sym);

//Objects : collection of properties and methods
console.log(typeof age);
console.log(typeof undefined); //undefined
console.log(typeof null); //null is an object

//Type conversion
let num=10
console.log(typeof num); //number
console.log(typeof(num)); //number

let num_to_char=String(num)
console.log(typeof num_to_char); //string

//Conversion
//"33" => 33 (string to number)
//'3ab' => NaN (NaN stands for Not a number)
//true => 1; false => 0

let isLoddedIn=1
let booleanisLoggedIn=Boolean(isLoddedIn)
console.log(booleanisLoggedIn);
//1 => true; 0 => false
//'' => false; 'hi' => true

// Operation on Numbers:
//1. Arithematic operations
console.log(2+2); //4
console.log(2-2); //0
console.log(2*3); //6
console.log(2**3); //8
console.log(2/3); //0.666..
console.log(2%3); //2

//Operation on strings:
let str1='hello'
let str2='js'
console.log(str1+str2);

//Adding diiferent datatypes 
console.log('1'+2); //12
console.log(1+'5'); //15
console.log('1'+2+2); //122 => If string at first so all treated a string
console.log(1+2+'2'); //32 => If string at last then starting formulaes takes place first then concatinate it with the last string

//Increament in number
let i=100
i++
console.log(i); //101