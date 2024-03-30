//--------Array specific loops---------
/*for loop is used to iterate over array elements one by one.
Different types of loops are :- for-of loop, for-in loop, for-each loop and normal for loop. */

//for-of loop on array
let arr1=[1,2,3,4,5]
for (const i of arr1) {
    console.log(i);
}

//for-of loop on string
let greeting='Welcome User'
for (const greet of greeting) {
    if(greet==' '){
        continue;
    }
    console.log('greeting:',greet);
}

/*-----------Maps-----------
-Maps  are different from arrays as they store key value pairs.
-Map stores unique values and gives the output in the order they are written.
-We can use for-of loop to iterate through maps. */
let map=new Map()
map.set('1','Voilet')
map.set('2','Indigo')
map.set('3','Blue')
map.set('4','Green')
map.set('5','Yellow')
map.set('6','Orange')
map.set('7','Red')
console.log(map); 
/* Output =>
    Map(7) {
        '1' => 'Voilet',
        '2' => 'Indigo',
        '3' => 'Blue',
        '4' => 'Green',
        '5' => 'Yellow',
        '6' => 'Orange',
        '7' => 'Red'
    } */

//for-of loop on map
for (const [key,value] of map) {
    console.log(key); //w/o value,
        /* Output =>
            [ '1', 'Voilet' ]
            [ '2', 'Indigo' ]
            [ '3', 'Blue' ]
            [ '4', 'Green' ]
            [ '5', 'Yellow' ]
            [ '6', 'Orange' ]
            [ '7', 'Red' ] */
    console.log(key,'-',value); //with value,
        /* Output =>
            1 - Voilet
            2 - Indigo
            3 - Blue
            4 - Green
            5 - Yellow
            6 - Orange
            7 - Red */
}

//-------loop on object--------
let obj = {
    js: 'JavaScript',
    cpp:'C++',
    rb:'Ruby',
    css:'Cascading Style Sheet'
}

//for-in loop on object
for (const key in obj) {
    console.log(`${key} is for ${obj[key]}`);
        /* Output =>
            js is for JavaScript
            cpp is for C++
            rb is for Ruby
            css is for Cascading Style Sheet */
}

//for-in loop on array
let programming=['js','cpp','java','py']
for (const lang in programming){
    console.log(lang);
        /*Output =>
            0
            1
            2
            3 */ //by default key in array starts from 0 upto the length of array minus one.
    console.log(programming[lang]) 
        /* Output =>  
            js
            cpp
            java
            py */
}