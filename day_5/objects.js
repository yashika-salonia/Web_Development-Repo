//Intro to Objects

// Object literals
let sym1=Symbol('key1') //defining a symbol for the key of object literal
let person = {
    name: "John",
    "full name":'John Doe', 
    age: 30,
    [sym1]:"value1", //symbol is defined in [] braces else it takes it as a string
    city: 'Delhi',
    isLoggedIn: false,
    lastLoginDays: ['Monday','Saturday']
}
console.log(person.city); //Delhi
console.log(person['city']); //Delhi
console.log(person["full name"]); // John Doe
console.log(person[sym1]); //value1 => symbols are called in [] braces only

//to modify values
person.age+=5
console.log(person.age); //35

//to freeze values in object
Object.freeze(person)
person.name='Jane'
console.log(person.name); //John

//Functions with objects
function greeting(person){
    console.log(`Hello user`) //simple function returning 'hello user'
};
console.log(greeting(person)) 

function greeting2(person){
    console.log(`Hello user, ${person.name}`)   
};
console.log(greeting2(person)) //Hello user, John


