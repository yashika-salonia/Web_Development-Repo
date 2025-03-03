//Stack memory (Primitive)

let myName= "John"
let otherName=myName
otherName= "Jane"
console.log(myName); //John
console.log(otherName); //Jane

let emotion="Happy"
let currEmotion=emotion
currEmotion="Sad"
console.log(emotion)
console.log(currEmotion)

//Heap memory (Non-Primitive)
let user1={
    user1Name: "John",
    age: 30
}
let user2=user1
user2.age=45;
console.log(user1.age); //45
console.log(user2.age); //45

let car={
    carModel:"Hyundai",
    Color: "black"
}
let car2=car;
car2.Color = "black"
console.log(car2.Color)
console.log(car2.Color)