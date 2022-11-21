console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let favColor = "";

while (favColor ===""){
    favColor=  prompt("What is your favorite color?");
}
alert("Great, " +favColor+" is my favorite color too!");

alert("Now let's try Exercise 3!");

//Exercise 3-1
let dayM = prompt("How many days did you rent 'The Little Mermaid'?");
let dayB = prompt("How many days did you rent 'Bother Bear'?");
let dayH = prompt("How many days did you rent 'Hercules'?");


var totalPrice = (dayM*3) + (dayB*3) + (dayH*3) ;
alert("Your total price is $"+totalPrice+".");

// Exercise 3-2
let whourG = prompt("what is your work hour for google?");
let whourA = prompt("what is your work hour for Amazon?");
let whourF = prompt("what is your work hour for Facebook?");

var totalWage = (whourG * 400) + (whourA * 380) + (whourF *350);
alert("Your total wage for this week is $"+ totalWage +".");



//Exercise 3-3
let isFull = "";
while (isFull !=="yes" || isFull !=="no"){
    isFull = prompt("Is the class full?  yes / no");
    if (isFull === "yes" || isFull ==="no") break;
}
let isConflict = "";
while (isConflict !=="yes" || isFull !=="no"){
    isConflict = prompt("Does the class schedule conflict?  yes / no");
    if (isConflict === "yes" || isConflict ==="no") break;
}
// let isFull = prompt("Is the class full?  yes / no");
// let isConflict = prompt("Does the class schedule conflict?  yes / no");
if(isFull ==="no" && isConflict ==="no"){
    let canEnroll = "Yes. You are eligible to enroll.";
    alert(canEnroll);
}else{
    let cantEnroll = "No. You are not eligible to enroll.";
    alert(cantEnroll);
}
// let canEnroll = prompt("Yes. You are eligible to enroll");
// let cantEnroll = prompt("No. You are not eligible to enroll");



// Attempt on 3-5

// let itemCount = "";
// while (typeof itemCount !== "number"){
//     itemCount = prompt("How many items are you buying?");
//     if(typeof itemCount === 'number'){
//         break;
//     }
// }

// var approved = "Your promo code has been accepted.";
// var disapproved = "Sorry, you cannot use the promo code."


// let itemExpire = "";
// while (itemExpire !=="y" || itemExpire !=="n"){
//     itemExpire = prompt("Is it expired?   y / n");
//     if (itemExpire === "y" || itemExpire ==="n") break;
// }
// if (itemCount <= 2 && itemExpire === "n"){
//
//     alert(approved);
// }else if(itemCount <2 && itemExpire === "n"){
//     let member = prompt("Are you Premium member?   y / n");
//     if(member === "y"){
//         alert(approved);
//     }else{
//         alert(disapproved);
//     }
// }else{
//     alert(disapproved);
// }

//Exercise 4
let username = prompt("Please type your username.");
let password = prompt("Please type your password.");
if (password.length > 5 && password.length <= 20 && password.includes(username)!==true && password.charAt(0) !== " " && username.charAt(0) !== " " && password[password.length-1] !== " " && username[username.length-1] !== " "){
    alert("Your username & password is valid");
}else{
    alert("Your username & password is Not valid");
}


