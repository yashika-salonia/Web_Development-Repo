//--------DOM manipulation----------

//---Different methods to get elements---

//1. getElementById
const title_tag=document.getElementById('title') 
//Now when we enter 'title_tag', output will be => <h1 id="title" class="heading">DOM learning</h1> => selects all the document

console.log(document.getElementById('title').id) //'title' 

console.log(document.getElementById('title').className) //'heading' => class=className

console.log(document.getElementById('title').getAttribute('id')) //'title'

console.log(document.getElementById('title').getAttribute('class')) //'heading'

//To set the attribute of an element
console.log(document.getElementById('title').setAttribute("class",'test')) //Output => undefined => it does not return anything but changes the value in HTML code

//---Different methods to change style of 'title_tag'---

console.log(title_tag.style.backgroundColor='pink'); //heading background color is changed to pink
console.log(title_tag.style.padding='15px'); //adds padding of 15px around text in heading
console.log(title_tag.style.borderRadius='25px'); //adds rounded corners with a radius of 25 pixels

//---Different ways to get content inside the tags---

//i. textContent => gets all the HTML within the tag as plain text including hidden text also
console.log(title_tag.textContent)

//ii. innerHTML =>  gets all the HTML within the tag, it includes any HTML present within
console.log(title_tag.innerHTML)

//iii. innerText => only returns visible part of the html, not any hidden parts
console.log(title_tag.innerText)


//2. getElementsByClassName
console.log(document.getElementsByClassName('heading')) // HTMLCollection [h1#title.heading, title:h1#title.heading]

//3. Query Selector => to select particular element among many similar elements
console.log(document.querySelector('h2')) //gives the output of 1st occuring h2 tag
console.log(document.querySelector('#title')) //by id
console.log(document.querySelector('.heading')) //by class
console.log(document.querySelector('input[type="password"]')) //by input type
console.log(document.querySelector('p:first-child')) //select first paragraph in the div tag, return null if p is not at 1st position
let myul=document.querySelector('ul') //return all the elements in ul list
console.log(myul);

//Query Selector on 'myul'
let turn_green=myul.querySelector('li') //selects 1st element in the list
console.log(turn_green);
console.log(turn_green.style.backgroundColor='Green') //changes background color to green for 1st elemented of list 
console.log(turn_green.style.borderRadius='20px') //rounds off the edges of first li by adding border radius of 20px
console.log(turn_green.innerText) //'One'
console.log(turn_green.innerText='Five') //changes list 1st element from 'One' to 'Five'

//------Query Selector All------

console.log(document.querySelectorAll('li')); //returns nodeList of all 'li' items
const temp = document.querySelectorAll('li');

//Nodelist is similar to array but not exact array and nodelist does not allow map function to work on it 

temp[0].style.color='green' //changes 1st list item to green

const myH1=document.querySelectorAll('h1') 
console.log(myH1) //Nodelist
//Since nodelist always exist as a list so we need to specify the index no. either in case of single element too.

myH1[0].style.color='green' //accesssing individual element by its index number i.e [0]

//forEach on  Node List
temp.forEach(function (li) {
    li.style.backgroundColor='yellow'
})

// getElementByClassName
document.getElementsByClassName('list') //gives html collection of list with class= 'list'
const tempClassList=document.getElementsByClassName('list');

//Applying for Each on Html Collection
/*
tempClassList.forEach(function (li) {
    console.log(li);
}) //This will not work and give error
*/

//To solve this we can convert html collection to array to use forEach and map on it

Array.from(tempClassList) //converting into array
const myConvArr= Array.from(tempClassList);

myConvArr.forEach(function (li) {
    console.log(li.style.color='blue');
    console.log(li.innerText='demo');
    console.log(li.backgroundColor='pink')
})

let mapArr=myConvArr.map((item)=>{
    item.textContent;
})
console.log(mapArr) 