//Stck memory (Primitive)

let myName= "John"
let otherName=myName
otherName= "Jane"
console.log(myName); //John
console.log(otherName); //Jane

//Heap memory (Non-Primitive)
let user1={
    user1Name: "John",
    age: 30
}
let user2=user1
user2.age=45;
console.log(user1.age); //45
console.log(user2.age); //45