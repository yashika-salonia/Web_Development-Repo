//THIS in function => this. is used in the function to return the values in context with that function
const user={
    name: 'sam',
    age: 23,

    attnMsg: function(){
        console.log(`${this.name}, how are you?`);
        console.log(`${this.age}`,'is my age'); //Output will return all the keys: values, that belong to the user in the object format
    }
}
user.attnMsg(); //sam, how are you?
user.name='john'; //changes sam => john
user.attnMsg() //john, how are you?
console.log(this); //{} => empty object

function sum(){
    console.log(this);
}
sum(); //{} => this contains many data values

function sum2(){
    let name='yashika'
    console.log(this.name);
}
sum2(); // undefined => this can only be accessible in object and not in function

//Arrow functions introduction
//Syntax: (parameters) => {body}

let userdata = () => {
    name:'joy'
    console.log(this.name);
}
userdata() //undefined => not able to access this because arrow function does not support this

//The way we use arrow function is by passing an argument which will become a property of that function

//Different method to define a arrow function:-

//1. Multiline arrow function
const addTwo=(a,b) => {
    return a+b;
}
console.log(addTwo(5,7)); //12

const subno=(a,b)=>{
    return a-b;
}
console.log(subno(10,12))

//2. Single line arrow function (w/o curly braces)
let singleLine=(x,y) => x+y;
console.log(singleLine(3,4)); //7

let sub=(x,y)=>x-y;
console.log(sub(4,2));

//3. Arrow Function with parameter but with parenthesis
let paramWithoutCurly=(p,q)=> (p+q); //when we don't use curly braces we don't write return
console.log(paramWithoutCurly(6,8)) //14

let nobrace=(p,q)=>p+q
console.log(nobrace(9,3));

//4. Object in arrow function
let objFunc=() => ({x:10}); //writing object in function requires parenthesis() 
console.log(objFunc());  //{x:10}
