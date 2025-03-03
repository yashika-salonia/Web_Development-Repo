//-------Higher order function-------- 

//forEach function  is a higher order function. It takes in another function as an argument and executes that function on each array, objects, etc.

let lang=['eng','hindi','french','latin']

//-----Different types to use forEach function on an array-----

//simple foreach function
lang.forEach(function (item) {
    console.log(item);
})

//Arrow function used in forEach function
lang.forEach( (item) => {
    console.log(item);
})

//separatly declaring a function and then used in forEach function
function print(item){
    console.log(item);
}
lang.forEach(print)

//forEach function can have more than one parameter
lang.forEach( (item,index,arr) => {
    console.log(item,index,arr);
        /*Output =>
            eng 0 [ 'eng', 'hindi', 'french', 'latin' ]
            hindi 1 [ 'eng', 'hindi', 'french', 'latin' ]
            french 2 [ 'eng', 'hindi', 'french', 'latin' ]
            latin 3 [ 'eng', 'hindi', 'french', 'latin' ] */
})

//Array with many objects
const myCoding=[
    {
        langName: 'Javascript',
        langFileName: '.js'
    },
    {
        langName: 'HTML',
        langFileName: '.html'
    },
    {
        langName: 'python',
        langFileName: '.py'
    },
]
//forEach function to get name of each coding language from the group of object inside an array
myCoding.forEach( (item) => {
    console.log(item.langName);
        /*Output =>
            Javascript
            HTML
            python */
})

//forEach function does not return any value and always returns undefined
console.log(myCoding.forEach( (item) => {
    return item.langName  //undefined
})); 