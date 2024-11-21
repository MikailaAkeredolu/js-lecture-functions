//Function in JS

// function print(input){
//     document.write(input);
//     document.write('<br />');
// }


//Creating a function in JS
// function multiplyByTwo(num){

//     return num * 2;

// }

//Call the function/ invoke

// document.write(multiplyByTwo(120));
// document.write('<br />');


// function multiplyByThree(num){

//     return num * 3;

// }

//print(multiplyByThree(120));

// document.write(multiplyByThree(120));
// document.write('<br />');



//Challenge 1. - create a function to replace this problem.
//I find myself repeating myself when i print and add a newline
//Apply the - DRY principle....by creating a custom print function
//Print - prints my function's output and adds a new line when invoked!!!

//strech goal - do a second copy using arrow functions


//Create a js function that takes a firstname, lastnmame and returns a fullname


//Function expression

// const timesTwo = function multiplyByTwo(num){

//     return num * 2;

// }


//print(multiplyByTwo(120));
 //print(timesTwo(4));



//console.log(timesTwo(4));//

//Anonymous function
// const times2 = function (num){

//     return num * 2;

// }

//Arrow Functions
// function multiplTwoNumbers(num1, num2){

//     return num1 * num2;

// }

// const multiplTwoNumbers = (num1, num2) => {
//     return num1 * num2;
// }


// const multiplTwoNumbers = (num1, num2) =>  num1 * num2;

// const multiplByOneNumber = num =>  num * 2;


//print(multiplTwoNumbers(4, 5));

//Callback function

// Synchronous
// function one(){
//     print(1);
// }

// function two(){
//     print(2);
// }

// function three(){
//     print(3);
// }

// one();
// two();
// three();

//Aysnchrounous
// function notAsyncOne(){
//     console.log(1);
// }

// function asyncTwo(){
//    setTimeout(()=>{
//     console.log(2);
//    }, 0);
// }

// function notAsynThree(){
//     console.log(3);
// }


//notAsyncOne();
//asyncTwo();
////notAsynThree();


//demo

// function callMeBack(){
//     print("I am just a regular ol function named caLL ME BACK");
// }

// function higherOrderFunction(callback){
//     callback();
// }

// higherOrderFunction(callMeBack);

// function notAsyncOne(){
//     console.log(1);
// }

// function asyncTwo(callback){
//    setTimeout(()=>{
//     console.log(2)
//         callback();
//    }, 2000);
// }

// function notAsynThree(){
//     console.log(3);
// }


// notAsyncOne();
// asyncTwo(notAsynThree);
////notAsynThree();

//Pyramid of doom a.k.a - callback hell
//DO NOT TRY THIS AT HOME
// function mfDoom() {
//     setTimeout(() => {
//       console.log(1)
//       setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//           console.log(3)
//         }, 500)
//       }, 2000)
//     }, 1000)
//   }

//Creating Promises

// const myPromise = new Promise(( resolve, reject )=> {

//      resolve('response value');
// });

//console.log(myPromise);


//Consuming promises
// myPromise.then((response)=>{
//         console.log(response);
// });

// fetch('https://api.github.com/users/octoca')
// .then((response)=>{
//   return response.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error(err);
// })

// //asyn await 
// async function getUsers(){
//     const response = await fetch('https://api.github.com/users/octocat');
//     const data = await response.json();
//     console.log(data);
// }

// //call it
// getUsers();

// const d = document.getElementById("demo");
// d.innerHTML = "Success";


// const demoClass = document.getElementsByClassName("demos");
// //we have to loop over the collection
// for(x = 0; x < demoClass.length; x++){
//     demoClass[x].style.backgroundColor = 'lightblue';
// }

/*
    demoQueryAll.forEach(query => {
    query.style.backgroundColor = 'black';
});

*/

// const demoTag = document.getElementsByTagName("article");

// for(x = 0; x < demoTag.length; x++){
//     demoTag[x].style.backgroundColor = 'yellow';
// }


// const demoQuery = document.querySelector('#demo-query');
// demoQuery.style.border = '2px solid green';

// const demoQueryAll = document.querySelectorAll('.demo-query-all');
// for(x = 0; x < demoQueryAll.length; x++){
//     demoQueryAll[x].style.backgroundColor = 'pink';
// }

// demoQueryAll.forEach(query => {
//     query.style.backgroundColor = 'black';
// });

// const html = document.documentElement;
// console.log(html.parentNode);

// const ul = document.getElementsByTagName('ul');

// for(x = 0; x < ul.length; x++){
//     console.log(ul[x].children)
// }

// ul.firstElementChild.style.backgroundColor = 'red';

//console.log(document.body.children[10].firstElementChild);
// document.body.children[10].firstElementChild.style.backgroundColor = 'red';
// //document.body.children[10].children[1].style.backgroundColor = 'yellow';

// document.body.children[10].firstElementChild.nextElementSibling.style.backgroundColor = 'blue';

// document.body.children[10].lastElementChild.style.backgroundColor = 'pink';

// document.body.children[10].lastElementChild.previousElementSibling.style.backgroundColor = 'yellow';


//Creating Nodes

// const paragraph = document.createElement("p");
// paragraph.innerHTML = "This is the paragraph we created";
// document.body.appendChild(paragraph);

//add a link to your linkedIn profile to the DOM

//create an element 
// const aVaraible = dsocument.createElement('a');
// aVaraible.innerHTML = "visit my linkedin";
// aVaraible.href = "https://www.linkedin.com/in/mikailaakeredolu"
// document.body.appendChild(aVaraible); 

//Create a List of Topics we have to learn

const topicList = document.querySelector('ul');

//create a new list item

const newTopicToLearn = document.createElement('li');

//change the content of the list item

newTopicToLearn.textContent = 'BootStrap';


topicList.appendChild(newTopicToLearn);


//add a new topic named Docker to the begining of the list !!!

const anotherTopicToLearn = document.createElement('li');
anotherTopicToLearn.textContent = 'Docker';

topicList.insertBefore(anotherTopicToLearn,topicList.firstElementChild);

// 1 - replace Bootstrap with React.

// newTopicToLearn.textContent = 'React';
//replaceChild

const replaceToLearn = document.createElement('li');
replaceToLearn.textContent = 'React';
topicList.replaceChild(replaceToLearn, topicList.lastElementChild);



// 2 Remove React from the list
topicList.removeChild(topicList.lastElementChild);



//Modify attributes in the Dom

//check if there in an image
const img = document.querySelector('img');
console.log(img.hasAttribute('src')); // Data Type 

//remove
img.removeAttribute('src');

//replace the giphy link with another gihpohy by modying attributes
//img.setAttribute('src', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG5uNTBkY3ozMXYxNGxlbG9ncDFicGpydWd2MXozNXB4MW1lMDUxNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kqCgujDZT1SO4/giphy.gif' )

img.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG5uNTBkY3ozMXYxNGxlbG9ncDFicGpydWd2MXozNXB4MW1lMDUxNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kqCgujDZT1SO4/giphy.gif';



//Events and Event Handlers

const modifyText = () => {
    const p = document.querySelector('p');
    p.textContent = " Fired an event";
}

const alertText = () => {
 alert('Hello world')
}

//grab the button
const btn = document.querySelector('button');

btn.addEventListener('click', alertText); //btn.onclick = alertText;

//added event listener
btn.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'pink';
});

btn.addEventListener('click', modifyText)

//remove evet listener
btn.removeEventListener('click', alertText);


















