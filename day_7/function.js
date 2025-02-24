//Function in JavaScript 
/*
~ A function is a block of code designed to perform a specific task.
~ Functions provide a way to organize and reuse the piece of code more efficiently.
~ We can use the same code with different arguments to produce different results.
*/

//This function is use to print name (each alphabet in new line)
function callname(){
    console.log('Y');
    console.log('A');
    console.log('S');
    console.log('H');
    console.log('I');
    console.log('K');
    console.log('A');
}
// console.log(callname());
callname()

//This function is used to print name in single line using return
function myname() {
    return 'yashika'
}
console.log(myname());

//This function is used to add two numbers
function addnum(num1,num2){
    console.log(num1+num2)
}
addnum(5,7); // 12 
// here  we are passing the arguments (5,7) in place of parameters num1 and num2 of the function
let result = addnum(5,7)
console.log('Result: ',result); //undefined

//Other method to add two numbers
function addnum2(a,b){
    return result =a+b 
    console.log('This will not be executed as after return other lines after that line become unreachable');
}
let result1 =addnum2(3,4)
console.log('Another Result :',result1); //7

//To print a welcome message after checking the person has username defined or not
function loginmsg(username){ // can set a default value i.e. (username='Jai')
    if(username === undefined){ // or we can also write if(!username) => this means if username is null, empty string, undefined or zero then it will print this message
        console.log( "Please enter your username");
        return //exits the function here
    }
    return `${username}, you have successfully logged in.`;
}
console.log(loginmsg("John")); //John, you have successfully logged in.
console.log(loginmsg()); // Please enter your username
