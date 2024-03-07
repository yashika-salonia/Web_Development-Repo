//Compairing two numbers with checking with '==' 
//'==' checks value only and sometimes skips the datatype 
console.log(2>3); //false
console.log(10 > 9); //true
console.log('1'==1); //true
console.log("Hello" == "hello"); //false - Different case

//comparing null value
console.log(null > 0); //false
console.log(null <= 0); //true
console.log(null == 0); //false
console.log(undefined == null) //true

//compairing undefined and null
console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined <= 0); //false
console.log(undefined == 0); //true

//Strict check '==='
//'===' checks both value and data type
console.log(2 === '2'); //false
console.log('t' === 't'); //true
console.log('r'===3); //false
console.log(null === undefined); //false

