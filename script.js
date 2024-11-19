//Function in JS

function print(input){
    document.write(input);
    document.write('<br />');
}


//Creating a function in JS
// function multiplyByTwo(num){

//     return num * 2;

// }

//Call the function/ invoke

// document.write(multiplyByTwo(120));
// document.write('<br />');


function multiplyByThree(num){

    return num * 3;

}

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

const timesTwo = function multiplyByTwo(num){

    return num * 2;

}


//print(multiplyByTwo(120));
 //print(timesTwo(4));



//console.log(timesTwo(4));//

//Anonymous function
const times2 = function (num){

    return num * 2;

}

//Arrow Functions
// function multiplTwoNumbers(num1, num2){

//     return num1 * num2;

// }

// const multiplTwoNumbers = (num1, num2) => {
//     return num1 * num2;
// }


const multiplTwoNumbers = (num1, num2) =>  num1 * num2;

const multiplByOneNumber = num =>  num * 2;


//print(multiplTwoNumbers(4, 5));

//Callback function

// Synchronous
function one(){
    print(1);
}

function two(){
    print(2);
}

function three(){
    print(3);
}

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

const myPromise = new Promise(( resolve, reject )=> {

     resolve('response value');
});

//console.log(myPromise);


//Consuming promises
myPromise.then((response)=>{
        console.log(response);
});

fetch('https://api.github.com/users/octoca')
.then((response)=>{
  return response.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error(err);
})

//asyn await 
async function getUsers(){
    const response = await fetch('https://api.github.com/users/octocat');
    const data = await response.json();
    console.log(data);
}

//call it
getUsers();