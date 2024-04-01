//---------Map in Javascript-----------

const num=[1,2,3,4,5,6,7,8,9,10]

//to add 10 using map
let newNum= num.map( (num) => num +10 )
console.log(newNum); //output: [11, 12, 13, 14,  15, 16, 17, 18, 19, 20]

//to add 10 using forEach function
let new_num=[]
num.forEach( (no) => {
    new_num.push(no+10);
})
console.log(new_num); //output: [11, 12, 13, 14,  15, 16, 17, 18, 19, 20]

//Chaining 
let newNum2 = num
    .map( (num) => num*10)
    .map( (num) => num+1 )
    .filter( (val) => val >=40)

//before filter
console.log(newNum2);  // Output => [11, 21, 31, 41, 51, 61, 71, 81, 91, 101] 

//now filtering the value greater than 40
console.log(newNum2); //Output=>[41, 51, 61, 71, 81, 91, 101]