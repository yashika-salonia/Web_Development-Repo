//Scope
/*
Block scope: Variable that are defined inside a block {} only and not outside of it.
Global scope: Variable that are defined globally in the program i.e. inside or outside of the block.
*/

let a=10 //let => block scope
const b=20 //const => block scope
var c=30 //var => global scope

if(true){
    let a=100
    const b=200
    var c=300
    console.log('Inner: ',a); //100
    console.log('Inner: ',b); //200
    console.log('Inner: ',c); //300
}
console.log('Outer: ',a) //10
console.log('Outer: ',b) //20
console.log('Outer: ',c) //300
