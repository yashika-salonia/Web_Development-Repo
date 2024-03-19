//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
/*
-> To run a function immediately when the script is loaded, we can use an Immediately Invoked Function Expression (IIFE)
-> To remove global scope pollution we use IIFE 

Syntax:- 
    (function(){
        <-code->
    })()
*/

//Simple function to print Hello after calling it
function one(){
    console.log(`Hello`);
}
one(); //Hello

//IIFE example

//1. Named IIFE
(function two(){
   console.log(`This is inside IIFE`);
})(); //';' to end previous function

//2. Arrow function as Un-named IIFE 
( (func) => {
   console.log(`This is arrow function inside ${func}`)
})('IIFE');
