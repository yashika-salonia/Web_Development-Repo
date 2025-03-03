//De-structuring of objects
let color={
    id:1,
    colorname:'red',
    code:'#FF0000'
}
//WE can get the names by destructuring of object w/o writing color. syntax
let {colorname}=color
console.log(colorname);

//Keys name can be changed using this synatx
let {colorname:clrName}=color
console.log(clrName); //red

/*
API => It is the data coming from the backend
API contains both types of objects and arrays that contains data in it.

Object api in json (Java Script Object Notation) format:
{
  '' : ,
  '' : '',
}
Example:
{
    'item': 'pen',
    'company':'win',
    'price': 10
}

Array api in json format:
[
    {},
    {}
]

Example:
[
   {'item':'pen','company':'win','price':10},
   {'item':'notebook','company':'epson','price':50}
]
Since reading API's are complex, therefore there are some online tools like JSON formatter to convert api in readable format.
*/
