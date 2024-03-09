//Intro to Array

//No array
// let ary1=[8,1,2,3]
// console.log(ary1[0]) //8 => accessing the first element of an array using index 0
// //String array
// let color=['red','blue','green']
// console.log(color); //[ 'red', 'blue', 'green' ]
// //Different way to define array
// let ary2 = new Array(2,5,4,3);
// console.log(ary2) //[ 2, 5, 4, 3 ]

// //Array methods
// //push() - add item to end of array
// color.push('yellow')
// console.log(color) // [ 'red', 'blue', 'green', 'yellow' ]
// //pop() - remove last item of array
// ary2.pop()
// console.log(ary2) //[ 2, 5, 4 ]
// //shift() - remove first item of array and return it
// ary1.shift()
// console.log(ary1); //[ 1, 2, 3 ]
// //Simillarly unshift() adds at beginning of array
// ary1.unshift(-1)
// console.log(ary1) //[-1, 1, 2, 3]
// //includes() check if an item is present in the array
// console.log(ary1.includes(9)); //false
// //indexOf() returns the position of a value in the array or -1 if not found
// console.log(ary1.indexOf(3)) //3
// console.log(ary1.indexOf(-5)); //-1 => Not found
// //To convert array in string
// let newary=ary1.join()
// console.log(ary1) // [ -1, 1, 2, 3 ]
// console.log(newary) // -1,1,2,3

// //Slice =>  Extract part of an array into a new array object. (original array donot change)
// console.log('A ',ary1 ); //A  [ -1, 1, 2, 3 ]
// let ary3=ary1.slice(0,3)
// console.log(ary3) //[ -1, 1, 2 ]
// //Spice => Copy original array but changes made on spliced one will reflect on the original array also
// console.log("B ",ary1 ) //[ -1, 1, 2, 3 ]
// let ary4=ary1.splice(0,3)
// console.log(ary4) //[-1,1,2]
// console.log("C ",ary1) //[3] 

//Arrays (Part-2)
let colorName=['red','blue','green']
let phoneModel=['samsung','iphone','oneplus']

//To combine two arrays we can use:

//1. push() method =>  It is used to add items to the end of an array 
//colorName.push(phoneModel)
//console.log(colorName) // [ 'red', 'blue', 'green', [ 'samsung', 'iphone', 'oneplus' ] ] 
//If we want to access the items from this array we will need to mention index inside the outer index
//console.log(colorName[3][0]) // samsung

//2. concat() => It is used to merge two or more arrays. This does not change the existing array.
let combineAry= colorName.concat(phoneModel)
console.log(combineAry); // [ 'red', 'blue', 'green', 'samsung', 'iphone', 'oneplus' ]

//3. spread => [...arr] => It is used to spread elements of array into another array
let newCombine=[...colorName, ...phoneModel]
console.log(newCombine); // [ 'red', 'blue', 'green', 'samsung', 'iphone', 'oneplus' ]

let newArr=[1,2,3,[4,5,6],7,[4,5,[8,9]]]
let flatArry = newArr.flat(Infinity)
console.log(flatArry) // [1, 2, 3,  4, 5, 6,  7, 4, 5,  8, 9]

//Functions on array
console.log(Array.isArray("welcome")) //false
console.log(Array.from('welcome')) //  ['w', 'e', 'l', 'c', 'o', 'm', 'e']
console.log(Array.from({name: 'welcome'})) //[] => gives empty array as output

//To convert elements into array
let num1=100
let num2=200
let num3=300
console.log(Array.of(num1,num2,num3)); // [100, 200, 300]