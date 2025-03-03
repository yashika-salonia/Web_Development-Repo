//Nested scope
function one(){
    const username='John'
    function two() {
        const web= 'youtube'
        console.log(username);
    }
    //console.log(web); => This will give error as the child element can not access parent elements data, it is blocked by JavaScript
    two();
}
one();

//Scope in if-else statements 
if(true){
    const user='Joy'
    if(user==='Joy'){
        let age=23
        console.log(user+' ' + age);
    }
    // console.log(age);
}
// console.log(user);

//Different types of writing a function

console.log(outerFunc(5)) //=>7 Output will be shown as in this case calling takes the value from the function as it is declared directly
function outerFunc(num){
    return num+2
}

//console.log(func2(6)); //Error will be shown as the function in this case is stored in a variable and declaration is done before using it and this is called hoisting
const func2=function(num){
    return num+2
}
