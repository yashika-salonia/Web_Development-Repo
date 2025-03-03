//Functions with objects
function calCartPrice(...num1){ //rest operator
    return num1
}
console.log(calCartPrice(500,200,700)); //[ 500, 200, 700 ]

//Using object in function
let person = {
    name: 'John',
    age: 30
}

function handleObject(anyobj){
    console.log(`Username is ${anyobj.name} and age is ${anyobj.age}`);
}
handleObject(person) // Username is John and age is 30

//You can also pass the arguments in function by creating object after passing the parameters to a function like this
handleObject({
    name:'sam',
    age:23
}) 
//Output: Username is sam and age is 23

//Using array in function
let newarr=[200,500,633]

function returnSecondValue(getarr){
    return getarr[1];
}
console.log(returnSecondValue(newarr)) //500

// You can also pass the arguments in function by creating an array after passing the parameters to a function like this
console.log(returnSecondValue([200,744,322])); //744
