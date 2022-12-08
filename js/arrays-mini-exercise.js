const names = ['Oh','Pan','Shah', 'Chu'];
console.log(names);

names[1] = "Justin";
console.log(names);

const numbers = [1,2,3,4,5];

function logEvenOddMessage (number){
    let isEven = (number %2 === 0) ?'even' : 'odd';
    console.log(isEven);
}

logEvenOddMessage(numbers[0]);


console.log("//for Each using logEvenOddMessage function");
numbers.forEach(logEvenOddMessage);


console.log("//for Each with 'function' w/ element, index, array");

numbers.forEach(function (element, index, array){
    console.log(element, index, array);
});


function logName (names){
    console.log(names);
}

names.forEach(logName);



const numbers2 = [3,2,4];
let total = 0;  //if you dont declare a number, the result will show NaN
numbers2.forEach(function (number){
    total += number;
});
console.log(total);


console.log("");
console.log("//using for loop")
for(let i = 0; i<names.length; i++){
    logName(names[i]);
}
console.log("");
console.log("//using forEach loop");
names.forEach(logName);

console.log("")
console.log("Extra Exercise");
console.log("");


console.log("");
console.log("extra #1");
// !! Write a function, logNums, that takes in an array and logs each number in the array !!

const arr = [1,2,3,4,5]
function logNums(input){
    input.forEach(function(input){
        console.log(input);
    });
}
logNums(arr);

console.log("");
console.log("extra #2");

// !! Write a function, returnLongString, that takes in an array of strings and returns all strings concatenated together !!
const whatsup = ['How ', 'are ','you?'];
function returnLongString (array){
    return array.join('');
}
console.log(returnLongString(whatsup));


// !! Write a function, returnArrSum, that takes in an array of values and returns the sum of all number elements !!
console.log("");
console.log("extra #3");
const numbb = [1,2,3,4,5,6]
function returnArrSum (array){
    let total = 0;
    for (let i=0; i<array.length; i++){
        total += array[i];
    }
    return total;
}

console.log( returnArrSum(numbb));


//1. Create an array of 10 foods. Write using a for loop,
// write logic that will log only the foods that start with a vowel.
// Write another solution using a forEach loop.
console.log("");
console.log("Array Bonuses");
console.log("#1")
let food = ['fried-chicken','izza','hamburger','ohotdog','steak','andwich','eporkchop','BBQrib', 'spaghetti','seafood'];
for(let i =0; i<food.length; i++){
    if (food[i][0].toLowerCase() === 'a' ||
        food[i][0].toLowerCase() === 'e' ||
        food[i][0].toLowerCase() === 'i' ||
        food[i][0].toLowerCase() === 'o' ||
        food[i][0].toLowerCase() === 'u'
    ){
        console.log(food[i]);
    }else{
        continue;
    }
}
console.log(    "");
console.log("Version 2 using .includes()");
for (let i =0; i<food.length; i++){
    let firstChar = food[i][0];
    let vowels = ['a','e','i','o','u'];
    if (vowels.includes(firstChar)){
        console.log(food[i]);
    }
}

console.log("");
console.log("#2");
const numArray = [1,2,3,4,5,6];
let evenSum = 0;
function addEvenNums (array){
    for (let i=0; i<array.length; i++){
        if (parseFloat(array[i]) %2 ===0){
            evenSum += array[i];
            console.log(evenSum);
        }
    }
    let result
    result = evenSum;
    return result;
}
console.log(addEvenNums(numArray)); // if you input [1,2,3,4,5,6], still works the same.

console.log("");
console.log("#3");
function checkIfNumInArray (array, number){
    for(let i =0; i<array.length;i++) {
        if (parseFloat(array[i])=== number) {
            return "input num in input array"

        }else{
            return "input num NOT in input array"
        }
    }
}
console.log(checkIfNumInArray(numArray,9));

console.log("");
console.log("Extra-exercises2");
console.log("#1");

//Define a function named allIndexesOf that takes in two arguments.
// The first argument should be the array to search and the second argument should be
// the value you want to search for. If the item does not exist in the provided array,
// return an empty array
//Exercise #1
console.log("More Array Bonus Exercise #1");
var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
function allIndexesOf(array, value){
    let newArray = [];
    for(let i=0; i<array.length; i++) {
        if (array[i] === value) {
            console.log(array[i]);

            // element = array[i];
            // console.log(element);

            // newArray.push(array.indexOf(element));// instead of using indexOf function,
            newArray.push(i);  // above will not work because you assigned it double times

            console.log(newArray);
        }
    }
    console.log(newArray)
    return newArray;
}
console.log(allIndexesOf(fruits, "apple"));   //not returning the second index element [solved]


// console.log("More Array Bonus Exercise #1");
// fruits = ["apple", "banana", "orange", "apple", "pineapple"];
// function allIndexesOf2(array, value){
//     let newArray = []
//     array.forEach((item, index) => {
//         if(item === value){
//             newArray.push(index)
//         }
//     })
//     console.log(newArray)
// }
// allIndexesOf2(fruits, "apple");




console.log("---------------");

//Exercise #2
console.log("More Array Bonus Exercise #2");
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
function removeAll (array, bugName) {
    return array.filter(function(element){
        return element !== bugName;
    });
}
console.log( removeAll(bugs, "ant"));

//Function exercises -->
console.log("Function exercises -->");
//return random number between min-max
function randomIntBetween(min, max){
    return Math.floor(Math.random()*max-min+1)+min;
}
console.log(randomIntBetween(1,10));


// return 0,1 randomly
function coinFlip (){
    return Math.floor(Math.random()*2-1)+1;
}
console.log(coinFlip());

// return between 1 and 6
function rollDice (){
    return Math.floor(Math.random()*6)+1;
}
console.log(rollDice());

//return sum of two random dice
function twoDice(){
    return rollDice() +rollDice();
}
console.log(twoDice());

//return random int 1 to 20
function twentySidedDie (){
    return Math.floor(Math.random()*20)+1;
}
console.log(twentySidedDie());

//return random int 1 to 12
function  twelveSidedDie (){
    return Math.floor(Math.random()*12)+1;
}
console.log(twelveSidedDie());

//return random int 1 to 4
function tetrahedron(){
    return Math.floor(Math.random()*4)+1;
}
console.log(tetrahedron());
// <--Function Exercises//
console.log("<-- Function exercises");
console.log("");

console.log("Rolling dice functions using the pre-made function above");
console.log("#1");
//return stored random number from 1 to 6 for times of input
function listOfRolls(num){
    let rollArray = [];
    for(let i=0; i<num; i++){

        rollArray.push(rollDice());
        // console.log(rollArray);
    }
    return rollArray;
}
console.log(listOfRolls(5));

console.log("#2");
//return stored random number using multiple pre-made dice functions for the number of input
function listOfRollsFromDieFunc(numberOfRolls, diceFunction){
    let rollArray =[];
    for (let i =0; i<numberOfRolls; i++){
        rollArray.push(diceFunction());  // it repeats the first-generated number
        // rollArray.push(twelveSidedDie()); // If I call function directly, it works fine [solved]
    }
    return rollArray;
}
console.log( listOfRollsFromDieFunc( 6, twelveSidedDie));


//================================= LOOPS AND ARRAY BONUSES
//
// 1. Create a function that returns a random day of the week
let days = "Monday-Tuesday-Wednesday-Thursday-Friday-Saturday-Sunday";
let daysArray = days.split("-");
console.log(daysArray);
function randomDay (){
    let randomNum = Math.floor(Math.random()*daysArray.length-1)+1;
    let ranDay = daysArray[randomNum];
    return ranDay;
}

console.log( randomDay());

// 2. Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
//
//   someFunction("a") // returns 1
//   someFunction("z") // returns 26

function countChar (input){
    return  input.toString().length;
}
console.log(countChar("HelloHowAreYou"));


// 3. Create a function that returns the longest string in a given array of string elements.
const stringGrp = ['Oh','Yeah','Hellooooooo','Hey'];
const stringGrp2 = ['Ohdfsf','Yedsfsah','Helloosdfsfooooo','eefwgdtbdbgdHey'];

function findLongest (array){
    let longString=['y'], result;
    for (let i=0; i<array.length; i++){
        if(array[i].length > longString.length){
            longString = stringGrp[i];
            result = longString;
        }else{
            result= longString;
        }
    }
    return result;
}
console.log( findLongest(stringGrp));
console.log( findLongest(stringGrp2));

// stringGrp.forEach(function (group, index){
//     console.log(group[index][index]);
//
// });



//
// 4. Create a function that takes in two arrays of elements, including numbers. If all numbers added together in the first array are equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.
//
//   var arr1 = ['bob', 1, true, 1, 2];
//   var arr2 = [2, null, undefined, 0, 2, "apple"]
//   exampleFunction(arr1, arr2) // returns true
//
// 5. Write a program to toggle the case for all characters in a string. Special characters will not change.
//   Example input: "aBc12#""
//   Example output: "AbC12#"
//
// 6. Write a program that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes". if the number appended does not equal the string length, output "No".
//
// Example Input: "geek5"
// Example Output: "Yes"
//
// Example Input: "codingchallenge25"
// Example Output: "No"
//
// 7. Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
//     1) add a student
//     2) delete a student
//     3) view all students in alphabetical order
//     4) view all students in reverse alphabetical











