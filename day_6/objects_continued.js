//Objects (part-2)

//By Constructor: Singleton object
let user1=new Object()
console.log(user1); //{}

//By Literal: Non-singleton objects
let user2={}
console.log(user2); //{}

user2.name= "John Doe"; 
user2.age=23
user2.isLoggedIn=true;
console.log(user2); //{ name: 'John Doe', age: 23, isLoggedIn: true }

//Object inside object
let user3={
    email:'john@gmail.com',
    fullName:{
        user3FullName:{
            first:"John",
            last:"Doe"
        }
    }
}
console.log(user3.fullName) //{ user3FullName: { first: 'John', last: 'Doe' } }
//accessing object inside an object
console.log(user3.fullName.user3FullName.last); //Doe

//Combining objects
let obj1={1:'a',2:'b'}
let obj2={6:'c',4:'d'}
let obj3={obj1,obj2} 

console.log(obj3); //output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '4': 'd',  '6': 'c' } }

let obj4=Object.assign({},obj1,obj2) 
console.log(obj4); //output: { '1': 'a', '2': 'b', '4': 'd', '6': 'c' }

//spread operator
let obj5={...obj1,...obj2}; 
console.log(obj5); //output: { '1': 'a', '2': 'b', '4': 'd', '6': 'c' }

//Database contains many objects in the from of array
let  users=[
    {
        id:0,
        username:'John'
    },
    {
        id:1,
        username:'Jane'
    },
    {
        id:2,
        username:'Joy'
    },
]
console.log(users[1].username) //Jane
console.log(user2); //{ name: 'John Doe', age: 23, isLoggedIn: true }

console.log(Object.keys(user2)); //[ 'name', 'age', 'isLoggedIn' ]
console.log(Object.values(user2)); //[ 'John Doe', 23, true ]
console.log(Object.entries(user2)) // [ [ 'name', 'John Doe' ], [ 'age', 23 ], [ 'isLoggedIn', true ] ]
//to check whether a key exist
console.log(user2.hasOwnProperty('isLogged')); //false