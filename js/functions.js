"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(myName){
    let helloMessage = "Hello, " +myName+"!";
    return helloMessage;
}
console.log( sayHello("Songju"));


//Arrow function
let sayHelloArrow = (myName) => {return `Hello, ${myName}!`};
console.log( sayHelloArrow("Mike"))

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

let helloMessage = sayHello("Songju");
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = "Songju";
let helloMessage1 = sayHello(myName);
console.log(helloMessage1);


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
let random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */



function isTwo(number){
    let answer = (number === 2);
    return answer;
}
console.log(isTwo(2));
console.log(isTwo(random));

//Arrow function
let isTwoArrow = (number) => {return  number === 2};
console.log(isTwoArrow(2));
console.log(isTwoArrow(random));



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// function shows as the same input & outcome
function calculateTip(tip, bill){
    let getTip = (bill * tip);
    return getTip;
}
console.log( calculateTip(0.20, 20));
console.log( calculateTip(0.25, 25.50));
console.log( calculateTip(0.15, 33.42));

//Arrow function
let calculateTipArrow = (tip, bill) => {return (bill * tip)};
console.log(calculateTipArrow(.20, 20))

//Customer friendly tip-calculating function
function calculateTip2(tip, bill){
    console.log("Your total bill is $"+bill+".");
    console.log("You have put "+tip+"% for the tip.")
    //turning format of the tip into decimal
    let tipFormatted = "0."+tip;
    tipFormatted = parseFloat(tipFormatted);
    //transitioning from string value to number using parseFloat().
    //limiting decimal number by using toFixed().
    let answer = parseFloat(( tipFormatted * bill).toFixed(2));
    console.log("Your tip amount will be $"+answer+"." )
    return answer;
}
console.log( calculateTip2(20, 100));
console.log( calculateTip2(20, 150));
console.log( calculateTip2(15, 30));

//Arrow function
let calculateTip2Arrow = (tip,bill) => {return (bill-(bill*tip/100)).toFixed(2)};
console.log( calculateTip2Arrow(50,100));


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
let totAmount = prompt("What is the total amount?")
let askTip = prompt("How much percent do you want to tip?");
let tipAnswer = calculateTip2(askTip, totAmount);
alert("The calculated tip is $"+ tipAnswer.toFixed(2)+"." );

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// function shows as the same input & outcome

// let priceI = prompt("What is the original price?")
// let discountI = prompt("How much is the discount? (decimal)")
// function applyDiscount(price, discount){
//     let newPrice = price - (price * discount);
//     return newPrice;
// }


// User-friendly function (shows percent)
let priceI = prompt("What is the original price?")
let discountI = prompt("How much percent is the discount?")
function applyDiscount(price, discount){
    let discountFormatted = discount/100
    let newPrice = price - (price * discountFormatted);
    return newPrice.toFixed(2);
}
alert("Your discounted price is $"+ applyDiscount(priceI, discountI)+".");