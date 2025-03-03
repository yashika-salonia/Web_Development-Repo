//-------Loops in Javascript-------
//A loop is a programming construct that allows code to be executed repeatedly. There are two types of loops available in JavaScript: "for" and "while".

//for loop
/*syntax
for(start;condition;increment/decrement) {
    code to be executed
}*/

for (let i=0; i<10;i++) {
    const element = i;
    // console.log(`${element}. Hello`);
}

for(let i=0;i<=5;i++){
    // console.log(`Outer loop value: ${i}`);
    for(j=0;j<=3;j++){
        // console.log(`Outer: ${i} & Inner loop value: ${j}`);
    }
}

//Print tables from 1 to 20
for(i=1;i<=20;i++){
    // console.log(`Table of ${i}`);
    for(j=1;j<=10;j++){
        // console.log(`${i} * ${j} = ${i*j}`);
    }
    // console.log(`\n`);
}

let myArr = ['red','green','blue']
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element);
}

//break and continue

for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`detected 5`);
        continue; //5 is skipped and the lopp is continued
    } 
    else if(i==15){
        console.log(`detected 15`);
        break; //to exit the control flow and stops  the loop
    }
    console.log(`value of i is ${i}`);
}