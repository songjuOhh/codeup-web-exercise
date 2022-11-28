"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(input){
//     let toLower = input.toLowerCase();
//     let result;
//     if(toLower === "blue"){
//         result = "blue is the color of the sky";
//         return result;
//     }else if(toLower === "red"){
//         result = "Strawberries are red";
//         return result;
//     }else if(toLower === "yellow"){
//         result = "Yum yum yellow banana";
//         return result;
//     }else{
//         result = "please enter different color.";
//         return result;
//     }
// }
// console.log (analyzeColor("blue"));
// console.log (analyzeColor("red"));
// console.log (analyzeColor("banana"));


// ** above code has been commented out due to next step **



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// analyzeColor(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// function analyzeColor(input){
//     let color = input.toLowerCase();
//     switch (color){
//         case "blue":
//         return "blue is the color of the sky";
//         break;
//
//         case "red":
//         return "Strawberries are red";
//         break;
//
//         case "yellow":
//         return "Yum yum yellow banana";
//         break;
//
//         default:
//         return "please enter different color.";
//         break;
//     }
// }

//setting 'result' as variable will make it run better
function analyzeColor(input){
    let color = input.toLowerCase();
    let result;
    switch (color){
        case "blue":
            result = "blue is the color of the sky";
            break;

        case "red":
            result = "Strawberries are red";
            break;

        case "yellow":
            result = "Yum yum yellow banana";
            break;

        default:
            result = "please enter different color.";
            break;
    }
    return result;
}

console.log( analyzeColor("blue"));
console.log( analyzeColor("red"));
console.log( analyzeColor("yellow"));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// let askColor = prompt("Please tell me a color.");
// console.log( analyzeColor(askColor));

let askColor = prompt("Please tell me a color.");
let askColorResult = analyzeColor(askColor);
console.log( askColorResult);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum,totAmount){
    let finalAmount, discount;
    if(luckyNum === 0){
        discount = 0;

    }else if(luckyNum === 1){
        discount = .1;

    }else if(luckyNum === 2){
        discount = .25

    }else if(luckyNum === 3){
        discount = .35

    }else if(luckyNum === 4){
        discount = .5

    }else if(luckyNum === 5){
        discount = 1

    }else{
        return "invalid lucky number";
    }
    finalAmount = totAmount - (totAmount * discount);

    return finalAmount.toFixed(2);
}

console.log( calculateTotal(0, 100));
console.log( calculateTotal(4, 100));
console.log( calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */



// Generate a random number between 0 and 6

let totalBill = prompt("What is the total bill?");
var luckyNumber = Math.floor(Math.random() * 6);

//Makes sure the input is a number
if(isNaN(totalBill)!==true) {
    alert("and Your lucky number is " + luckyNumber+"...");
    alert("Your total bill was " +totalBill+"...");

    //Returning the result
    if (luckyNumber > 0) {
        alert("Congrats!!! Now your new total will be $" + calculateTotal(luckyNumber, totalBill) + "!!!");
    } else {
        alert("Aw.. your new total will be $" + calculateTotal(luckyNumber, totalBill) + "... yeah it is the same..");
    }
}else{
    //Quit the script if the input is not a number
    alert("It is not a number");
}

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let confirmUser = confirm("Would you like to enter a number?");
let enteredNumber;
if(confirmUser === true){

    enteredNumber = prompt("Please tell me your number.");
    if(isNaN(enteredNumber) !== true) {
        // try isNan as well

        //Making sure input stay as a number
        enteredNumber = parseInt(enteredNumber);

        //Even or odd
        if (enteredNumber % 2 === 0) {
            alert("The number is Even");
        } else {
            alert("The number is odd");
        }

        //Add 100 to the number
        let add100 = enteredNumber + 100;
        alert("If I add 100 to your number, it will be " + add100 + ".");

        //Positive or Negative
        if (enteredNumber > 0) {
            alert("The number is Positive");
        } else if (enteredNumber < 0) {
            alert("The number is Negative");
        } else {
            alert("The number? is neither positive or negative");
        }
    }else{
        alert("Sorry, that is not a number.");
    }
}else{
    alert("Sorry, I won't bother you.");
}

//or you can use functions such as...
// isEvenOrOdd, add100, isNum...
