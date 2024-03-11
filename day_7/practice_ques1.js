//Practice question (week-1)

//1.Type Conversion

// To convert “123” into a number 
let str="123"
let num_to_string = Number (str);
console.log(typeof str); //string
console.log(typeof num_to_string); //number

//Convert 5 into a string
let num=5
let str_to_num = String(num);
console.log(typeof str_to_num); //string

//Convert a boolean into a number
let bool_val = true;
let num_from_bool = Number(bool_val);
console.log(typeof num_from_bool); //number

//2. String Manipulation

//Concatenate two strings “hello” and “world” together into a single string
let str1 = "Hello";
let str2 = "World";
let concat_strings = `${str1}` + " " + `${str2}`;
console.log(concat_strings); // Hello World

//Find the length of string “Javascript”
let js_length = "Javascript";
console.log(js_length.length); //10

//Extract a string “world” from “hello world”
let str3='hello world';
let sliced_str=str3.slice(6,11);
console.log(sliced_str); //world

//3. Data Types

//Determine the data type of the variable x = 10
let x = 10;
console.log(typeof x); //number

//Determine the datatype of the variable y = "hello"
let y = "hello";
console.log(typeof y); //string

//4. Type Checking

// Check if the variable a ="123" is a string
let a='123'
if (typeof a == 'string') {
    console.log('a is a string');
}
else{
    console.log('a is not a string');
}

//Check if the variable b = 10 is a number
let b=10;
if (typeof b == 'number') {
    console.log('b is a number');
}
else{
    console.log('b is not a number');
}

//Check if the variable c = true is a boolean
let c=true;
if (typeof c == 'boolean') {
   console.log('c is a boolean');  
}
else{
    console.log('c is not a boolean');
}

//5. Type Coercion

//Explain what happens when you add a string "5" and a number 5
console.log( "5" + 5 ); // 55 => '5' is treated as a string gets added to number 5

//Explain what happens when you compare a string "10" and a number 10 using the == operator. 
console.log( "10" == 10  ); // true => '10' as a string id equal in value as 10 as a number and '==' operator doesnot check the datatype and only checks the value

// Explain the difference between == and === operators in JavaScript
console.log('7' == 7) //true => '==' checks only for the value
console.log('7' === 7) //false => '===' checks both the value and the datatype, it considers data types first before comparing the values
