//Strings in JS
let greet ='hello'
let name = 'world'
console.log(`${greet} ${name}`); //hello world

//String methods
let place=new String('India')
console.log(place[1]); //n is printed
console.log(place.__proto__); //to print all the object values //{}
console.log(place.length); //5
console.log(place.toUpperCase()); //INDIA
console.log(place.charAt(2)); //d is printed as charAt method takes index
console.log(place.indexOf('a')); //4
console.log(place.indexOf('A')); //-1 because A is not present in string  

//=> String methods are case sensitive

let newString=place.substring(0,4) //The substring includes the characters up to excluding the character indicated by end
console.log(newString); //Indi
let otherString=place.slice(-5,3)
console.log(otherString);  //Ind

//To remove white spaces from a string we can use trim()
let str='   Hello World    '
console.log(str); //   Hello World    
console.log(str.trim()) ; //Hello World

let url='http://www.google.com';
console.log(url.replace('http','https')); //https://www.google.com 
console.log(url.includes('yahoo')); //false
console.log(url.split('.')); //[ 'http://www', 'google', 'com' ]