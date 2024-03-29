//------------Switch case in javascript--------------

//The switch statement is used to compare a  value with multiple values (one at a time) and execute the code block associated with the first matching

//-------------Synatx---------------
/*switch(expression) {
    case value1:  
        statement1; 
        break;
    case value2:  
        statement2;
        break;
    default:            
        statement3;
}*/

//--------Example of switch case--------
let day = "tuesday";
switch (day) {
    case 'monday':
        console.log("It's Monday");
        break;
    case 'tuesday':
        console.log("It's Tuesday");
        break;
    case 'wednesday':
        console.log("It's Wednesday");
        break;
    case 'thursday':
        console.log("It's Thursday");
        break;
    case 'friday':
        console.log("It's Friday");
        break;
    case 'saturday':
        console.log("It's Saturday");
        break;
    case 'sunday':
        console.log("It's Sunday");
        break;
    default:
        console.log("Invalid Day");
}