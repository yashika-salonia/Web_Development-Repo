//----------------Control Flow Statements in Javascript------------------

/*The control flow statements are used to direct the program's execution by controlling the order in which a set of instructions is executed. 
Types of control flow statement are :-
1. Conditional statements: If, else if and else
2. Loops : For, while and do while 

//----------------Synatx-------------------
if(condition) {
    //code block to be executed if the condition is true 
}  
else if (condition) { 
    //code block to be executed if the previous condition is false and this condition is true 
}  
else {  
    //code block to be executed if all the conditions above are false 
}

//--------------Syntax for "If" statement for boolean expression----------------
if(boolean expression) {
    // Code Block to be executed when the boolean expression is 'true'
}
*/

//---------Example---------
if(true){
    console.log('executed');
}

let num=4
if (num>0) {
    console.log("Number is positive");
} else {
    console.log("Number is not positive");
}

const score=400
if(score>200){
    let power='Super Power';
    console.log(`Power according to score is ${power}`);
}

let balance=1000
//if(balance>500) console.log(`Balance: ${balance}`); //Short hand notation :- code will run but it's not a good practice 

if(balance<500 && balance>=100){
    console.log('less than 500');
}
else if(balance>500){
    console.log('greater than 500');
}
else if(balance==500){
    console.log('equal to 500');
}
else if(balance===null || balance==undefined){
    console.log('Balance is null or undefined')
}
else{
    console.log('inappropriate balance');
}

//-------------Truthy and Falsy values-------------
/* In JavaScript, a value is considered truthy if it evaluates to true when coerced into a boolean context. Otherwise, the value is considered falsy in JavaScript. */

//Truthy values:- '0', 'false', ' ', [], {}, function(){}
//Falsy value :-  false, 0, -0, "", null, undefined, NaN, BigInt

let usermail=[] //empty array
if(usermail.length ===0){
    console.log('array is empty');
}

let empobj={} //empty object
if(Object.keys(empobj).length ===0){
    console.log('Object is empty');
}

//-------------Nullish coalescing operator (??)-------------
//Used for: null,undefined
let val1,val2,val3,val4;
val1=5 ?? 10
val2=null ?? 10
val3=undefined ?? 15 
val4=null ?? 10 ?? 16 
console.log(val1); //5
console.log(val2); //10
console.log(val3); //15
console.log(val4); //10 => 1st value is assigned

//-------------Terniary operator-------------
// condition ? true : false
let no=20
no >= 30 ? console.log('Greater than and equal to 30'): console.log('Less than 30');