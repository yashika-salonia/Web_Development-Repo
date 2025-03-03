//---------Filter in javascript-----------

const num=[1,2,3,4,5,6,7,8,9,10]

//Filtering the array using filter method

//const new_num = num.filter( (no) => no>4 )
const new_num = num.filter( (no) => {
    return no>4 //return is necessary when we declare another scope '{}'
})
console.log(new_num); //[ 5, 6, 7, 8, 9, 10 ]

//using forEach function
const new_num2=[]
num.forEach( (no) => {
    if(no > 4){
        new_num2.push(no)
    }
})
console.log(new_num2); //[ 5, 6, 7, 8, 9, 10 ]

//Example of use of filter
let booksRecord=[
    {
        title:'Book-1', genre: 'Fiction', pages: 120, publish: 2004
    },
    {
        title:'Book-2', genre: 'Non-Fiction', pages: 130, publish: 2001
    },
    {
        title:'Book-3', genre: 'Thriller', pages: 140, publish: 2003
    },
    {
        title:'Book-4', genre: 'Mystery', pages: 160, publish: 2004
    },
    {
        title:'Book-6', genre: 'Non-Fiction', pages: 170, publish: 2001
    },
    {
        title:'Book-7', genre: 'Mystery', pages: 140, publish: 2008
    },
]

//to get the books with genre Mystery 
const userBooks=booksRecord.filter( (book) => book.genre === 'Mystery')
console.log(userBooks);
    /* Output:- 
    [
        { title: 'Book-4', genre: 'Mystery', pages: 160, publish: 2004 },
        { title: 'Book-7', genre: 'Mystery', pages: 140, publish: 2008 }
    ] */
    
//to get books published in year 2001
const  oldBooks = booksRecord.filter( (book) => {
    return book.publish >= 2004 && book.genre === 'Fiction';
})
console.log(oldBooks);
    /* Output:-
    [
        { title: 'Book-1', genre: 'Fiction', pages: 120, publish: 2004 }
    ] */
    