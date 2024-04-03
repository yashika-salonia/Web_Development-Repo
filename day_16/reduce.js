//---------Reduce in Js---------- 
//Reduce is a method that allows us to apply a function on each element of an array, and reduce it down to a single value.

let num=[1,2,3]
//to print 3+2+1=6 in readable form
let total=num.reduce(function (acc,currval) {
    console.log((`accumulator: ${acc} and currval: ${currval}`));
    return acc + currval
},0)
console.log(`The sum is`,total); 
    /*Output: 
        accumulator: 0 and currval: 1
        accumulator: 1 and currval: 2
        accumulator: 3 and currval: 3
        The sum is 6 */

//Arrow function is used to write the same function in simple form
let arr=[4,5,6] 
let total_arr=arr.reduce( (acc,curr) => acc+curr ,0 ) //Simpler form 
console.log(`The sum is`,total_arr);  //Output => The sum is 15

//Shopping card example
let shop_card=[
    {
        course: 'js course',
        price: 999
    },
    {
        course: 'python course',
        price: 2999
    },
    {
        course: 'mobile dev course',
        price: 5999
    },
    {
        course: 'data science course', 
        price: 12999
    }
]
let add_arr=shop_card.reduce( (acc,item) => acc + item.price,0)
console.log(`Total price of courses:`,add_arr); //Output: Total price of courses: 22996
//This program adds all prices from array items into one variable "add_arr"