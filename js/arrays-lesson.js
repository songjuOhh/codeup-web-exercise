

// ============================= Adding and Removing Elements

/*

    // The following array methods change the original array value!

    someArray.push()    = adds new last element
    someArray.pop()     = removes last element
    someArray.unshift() = adds new first element
    someArray.shift()   = removes first element

 */

const pies = [
    "apple",
    "cherry",
    "key lime",
    "huckleberry",
    "rhubarb"
];

// push     : add an element at the end

pies.push("Vanilla");
console.log(pies);  // ['apple', 'cherry', 'key lime', 'huckleberry', 'rhubarb', 'Vanilla']


// pop      : remove the last element

let x1 = pies.pop();
console.log(x1);   // 'Vanilla'

let y2 = pies.pop();
console.log(y2);   // 'rhubarb'


console.log('(Before)'+pies);
pies.pop();
console.log('(After)'+pies);  //  ['apple','cherry','key lime']


// unshift      : Add an element in the front of array

pies.unshift('vanilla');
console.log(pies);  //  ['vanilla','apple','cherry',key lime']


// shift        : Remove an element in the front
const removedFirstElement = pies.shift();
console.log(removedFirstElement);    //'Vanilla'
console.log(pies);      //  ['apple', 'cherry', 'key lime']




// ============================= !! MINI-EXERCISE 1 !!

/*
    1. Create an array the string elements 'April', 'May', 'June'
    2. Add 'July' in the correct place of the array
    3. Add 'March' in the correct place of the array
    4. July is too hot; remove it from the array.
    Console log the result and verify you get ['March', 'April', 'May', 'June']
 */
console.log('mini exercise');
let month = ['April', 'May', 'June'];
month.push('July');
console.log(month);
month.unshift('March');
console.log(month)
month.pop();
console.log(month);


// ============================= Slicing

// RETURNS A SUB ARRAY COPY OF THE ORIGINAL

/* SYNTAX

   someArray.slice(startingIndex, startingIndexNotIncluded);

   // one argument only will return a copy from the starting index to the end of the array

 */


pies.push("huckleberry",
    "rhubarb");

console.log(pies);
console.log(pies.slice(0, 2));   // return elements in between the index


// ** create a function that takes in an array of pies baked and return the 3 most recently baked pies

console.log(pies);
pies.push('lemon pie','pecan pie', 'cream pie');

function threeMostRecentPies(pies){
    return pies.slice(pies.length -3);  // duplicate last the 3 elements to another array
}

console.log(threeMostRecentPies(pies));   //['lemon pie', 'pecan pie', 'cream pie']

// ============================= Copying Array Values

const x = [1, 2, 3];
const y = x;
const z = y;
console.log(x);
console.log(y);

x.push(4);
console.log(x);
console.log(y);
console.log(z);


// Copies the array values
// const x = [1, 2, 3];
console.log(x);
x.slice();
console.log(x);
x.push('hello');
console.log(x);
console.log(y);




// ============================= Sorting
//
// const pies = [
//     "apple",
//     "rhubarb",
//     "key lime",
//     "cherry",
//     "huckleberry"
// ];
//

console.log(pies);

pies.sort(); // change the original value in sorted alphabetical order
console.log('After pies.sort() = ');
console.log(pies);

// custom sorting: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// const numbers = [1, 11, 2, 5];
// function compareNumbers(a, b) {
//     return a - b;
// }
// numbers.sort(compareNumbers);
// console.log(numbers);


// ============================= Reversing
//
// const pies = [
//     "apple",
//     "huckleberry",
//     "cherry",
//     "rhubarb",
//     "key lime"
// ];



// pies.sort().reverse(); // change the original value
// console.log(pies);



// ============================= Split / Join

// splitting string into and array

// const names = "Bob,Sally,Mary";
// const namesArr = names.split(" ");
// console.log(namesArr);


// const namesString = namesArr.join("");
//
// console.log(namesString);


// splitting on an empty string

// const everyCharacter = bondsString.split("");

// joining array into a string

// const bondsArray = ["Connery", "Lazenby", "Moore", "Dalton", "Brosnan", "Craig"];
// const bondsString = bondsArray.join("");
// console.log(bondsString);


//
//
// let output = "";
// for (var i = 0; i < bondsArray.length; i += 1) {
//     output += bondsArray[i];
//     output += ", ";
// }
//
// console.log(bondsString);


// ============================= !! MINI-EXERCISE 2 !!

/*
    1. Put the first names of everyone in your row in the order they are sitting (just your half of the classroom)
    2. Log the alphabetical order of everyone in your row
    3. Log the reverse alphabetical order of everyone in your row
    4. Log everyone in the row in reverse order
    5. Log an array of just the first two students in the row (left to right)
    6. Log everyone in the row in a single string separated by spaces
    7. Log everyone in the row in a single string separated by underscores
 */




