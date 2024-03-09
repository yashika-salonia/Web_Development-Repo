//Intro to Array

//No array
let ary1=[8,1,2,3]
console.log(ary1[0]) //8 => accessing the first element of an array using index 0
//String array
let color=['red','blue','green']
console.log(color); //[ 'red', 'blue', 'green' ]
//Different way to define array
let ary2 = new Array(2,5,4,3);
console.log(ary2) //[ 2, 5, 4, 3 ]

//Array methods
//push() - add item to end of array
color.push('yellow')
console.log(color) // [ 'red', 'blue', 'green', 'yellow' ]
//pop() - remove last item of array
ary2.pop()
console.log(ary2) //[ 2, 5, 4 ]
//shift() - remove first item of array and return it
ary1.shift()
console.log(ary1); //[ 1, 2, 3 ]
//Simillarly unshift() adds at beginning of array
ary1.unshift(-1)
console.log(ary1) //[-1, 1, 2, 3]
//includes() check if an item is present in the array
console.log(ary1.includes(9)); //false
//indexOf() returns the position of a value in the array or -1 if not found
console.log(ary1.indexOf(3)) //3
console.log(ary1.indexOf(-5)); //-1 => Not found
//To convert array in string
let newary=ary1.join()
console.log(ary1) // [ -1, 1, 2, 3 ]
console.log(newary) // -1,1,2,3

//Slice =>  Extract part of an array into a new array object. (original array donot change)
console.log('A ',ary1 ); //A  [ -1, 1, 2, 3 ]
let ary3=ary1.slice(0,3)
console.log(ary3) //[ -1, 1, 2 ]
//Spice => Copy original array but changes made on spliced one will reflect on the original array also
console.log("B ",ary1 ) //[ -1, 1, 2, 3 ]
let ary4=ary1.splice(0,3)
console.log(ary4) //[-1,1,2]
console.log("C ",ary1) //[3] 
