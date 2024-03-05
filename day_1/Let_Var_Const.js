const a=3 //not allowed to modify
//console.log(a);

let name_1='ajay'
name_1='john' 
//console.log(name_1);

//Var is not prefered  over let and const because var has function scope whereas let and const have block scope 
var age=12 

//Can define variable without let,var or const but is not recommended because it can lead to errors
city='jaipur'

//WE can also define without aasigning it any value
let school //output will be undefined value

console.table([a,name_1,age,city,school]); //display all defined data types in tabular form