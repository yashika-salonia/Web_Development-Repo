//Datatypes of 2 types:
//1. Primitive: 7-types => String, Number, Boolean, null, undefined, Symbol, BigInt

const score=300 //number
let name="John" //string
let scoreValue=12.54 //number
const isLoggedIn=false //boolean
let temp=null 
let email //undefined
let id=Symbol('123')
let mailId=Symbol('123')
console.log(id === mailId); //false
let bigNum=BigInt('9876543219876543211') 
console.log(typeof bigNum); //bigint

//2.Non-Primitive: Objects, Arrays, Function

//Array
let color=['red','green', 'blue'] 

//Object
let user={
    userName: "John",
    age: 25,
    gender:"Male"
} 
console.log(user); 

//Function
let greet=function(){
    console.log("Hello World");
} 
console.log(greet());
