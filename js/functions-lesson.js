
//Version 0
// function myFunction(){
//     let name = "Songju";
//     return "Thank you, " + name + ". You have ran my function.";
// }
//
// let message = myFunction();
// console.log(message);

//Version 1
// function myFunction(name){
//     return "Thank you, " + name + ". You have ran my function.";
// }
// let message = myFunction("Songju");
// console.log(message);


//Version 2
// let userName = prompt ("What is your name?")
// let message = myFunction(userName);
// function myFunction(name){
//     return "Thank you, " + name + ". You have ran my function.";
// }
//
// let message = myFunction(userName);
// console.log(message);


//Version 3
// let userName = prompt ("What is your name?")
//
// function myFunction(name){
//     return "Thank you, " + name + ". You have ran my function.";
// }
// let message = myFunction(userName);
// console.log(message);



// //Version 4
// function fight(person1, person2){
//     console.log(person1 + " punched " + person2 + " right in the kisser.")
// }
// fight("Billy", "Bob");

//by assigning variables, it becomes more clear. Like below:
let person1 = "Billy",
    person2 = "Bob"

function fight(person1, person2){
    console.log(person1 + " punched " + person2 + " right in the kisser.")
}
fight("person1", "person2");



// function isEven(number){
//     let number = num;
//     let answer = (number %2 ==0);
//     return answer;
// }
// let x =isEven(233253465);
// console.log(x);
//
// let y=isEven(236622);
// console.log(y);
//
// let z=isEven(true);
// console.log(z);



function isEven(num) {
    //Get the pieces of the puzzle!!!
    //Put the pieces of the puzzle into variables
    let number = num;
    let answer = (number % 2 == 0);

    //finally return the answer
    return answer;
}

let x =isEven(233253465);
console.log(x);

let y=isEven(236622);
console.log(y);

let z=isEven(true);
console.log(z);


//if you want to make a variable universal:
//**But You will not be able to use the variable name again = cautious.
let user;

document.addEventListener("DOMContentLoaded", function (){
});


//**IIFE - allows us to keep our variables isolated.
// define a function and immediately invoke (i.e. call) it
(function () {
    //you can put multiple functions and variables in here
    //all of the variables and variables will stay local as long as they stay here.
})();