//Dates
// let mydate=new Date();
// console.log(typeof mydate); //date is an object
// console.log(mydate); //2024-03-08T17:29:29.754Z
// console.log(mydate.toDateString()); //Fri Mar 08 2024
// console.log(mydate.toString()); //Fri Mar 08 2024 23:00:11 GMT+0530 (India Standard Time)
// console.log(mydate.toISOString()); //2024-03-08T17:31:56.523Z
// console.log(mydate.toLocaleString()); // 8/3/2024, 11:01:56 pm
// console.log(mydate.toLocaleDateString());//8/3/2024

let createdDate=new Date(2023,2,6)
console.log(createdDate.toLocaleString()); // 6/3/2023, 12:00:00 am
let new_date=new Date("01-14-2023") //mm-dd-yy format 
console.log(new_date.toLocaleString()); //14/1/2023, 12:00:00 am

//Time stamps
let timeStamp=Date.now()
console.log(timeStamp); //1709920223386 => in milli second

//To get time from the date
let userTime=createdDate.getTime()
console.log(userTime); //1678041000000 => in milli second

//To get month from the date
let userMonth=new Date("2023-05-01")
console.log(userMonth.getMonth()+1) ; //5
console.log(userMonth.getDay()) ; //1

//To define many parameters of date in the form of object
new_date.toLocaleString('default',{
    weekday:"long"
})
console.log(new_date);