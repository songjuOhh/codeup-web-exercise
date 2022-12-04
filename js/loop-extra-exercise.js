// Write a loop that outputs the first 50 fibonacci numbers.
// https://en.wikipedia.org/wiki/Fibonacci_number
// Recommend starting your loop at 1 and ending your loop once you've calculated 50 fibonacci numbers.

// let num=0, result;
// for (var i=1; i<12; i++){
//
//     result = num**i;
//     console.log(result);
// }
console.log("");
console.log("Exercise 1 starts");

let beforeAdded =0, afterAdded=1, NextLoop;
for (var i = 0; i<12; i++){
    NextLoop = beforeAdded + afterAdded;
    beforeAdded = afterAdded;
    afterAdded = NextLoop;


    console.log(beforeAdded);

    // beforeAdded = beforeAdded + i+(beforeAdded*i*i)-1;
    // afterAdded += beforeAdded*i;
    // console.log("beforeAdded   "+beforeAdded);
    // console.log("afterAdded    "+beforeAdded);
}



// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calculated 50 primes.
// https://en.wikipedia.org/wiki/Prime_number
console.log("");
// console.log("Exercise 2 starts");
//
// function conutPrime(){
//     var countTotal = [];  //store number count of Prime numbers
//
//     for (var i = 0; i < data.result.length; i++) {
//         let countInitial = [];
//         var result = data.result[i];
//
//
//
//             if (i === 2 || i === 3 || i === 5 || i === 7) {
//                 countInitial.push(result.data[j].prime);
//                 console.log(i);
//             } else if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
//                 continue;
//             } else {
//                 countInitial.push(result.data[j].prime);
//                 console.log(i);
//             }
//             countTotal.push(countInitial);
//         }
//     }

//Version3
console.log("Version 3");
let count = 0;
let j = 0;
while (count<50) {

    for (var i = 0; i < 5000; i++) {

        if (i === 2 || i === 3 || i === 5 || i === 7) {
            count++;
            console.log(i+ " - so far, counted "+ count);
        } else if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0 ||i % 11===0) {
            continue;

        }else if(count ===50){
            break;
        } else {
            count++;
            console.log(i + " - so far, counted "+ count);
        }
    }
    j++;
    if(count === 50){
        break;
    }
}


console.log("");
console.log("Version 4");


// function isPrime(num) {
//     var prime = num != 1;
//     for(var i=2; i<num; i++) {
//         if(num % i == 0) {
//             prime = false;
//             break;
//         }
//     }
//     return prime;
// }

function isPrime(num) {
    if (num > 2 && num % 2 === 0) return false;
    for (var i = 3; i < Math.sqrt(num); i += 2) {

        if (num % i === 0) {
            return false;
        }else{

        }
    }
    return num > 1;
}
console.log( isPrime(51));

// Create a function, moveDigitsTowardFive, that takes in an integer and
// returns the integer with all the digits moved one closer to the number five.
// If a digit is five, it should remain the same.
// You will likely need to convert the number to a string to manipulate each digit
// and then convert the output back to a number. Assume only integer inputs.

// moveDigitsTowardFive(5) // returns 5
// moveDigitsTowardFive(159) // returns 258
// moveDigitsTowardFive(456) // returns 555
// moveDigitsTowardFive(236) // returns 345
// moveDigitsTowardFive(19286538) // returns 28375547
// moveDigitsTowardFive(0000) // returns 1111
// moveDigitsTowardFive(99) // returns 88


console.log("");
console.log("Exercise #4");
function moveDigitsTowardFive(number) {
    let numberString = number.toString();
    console.log(numberString);
    let numberArray = numberString.toString().split('');
    console.log(numberArray);
    numberArray = numberArray.map(Number);
    console.log(numberArray);

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > 5) {
            numberArray[i]--;
        } else if (numberArray[i] < 5) {
            numberArray[i]++;
        }
    }
    let result;
    result = numberArray.join('');
    return result;
}
console.log( moveDigitsTowardFive(345689));

    // toArray = Array.from( toString);
    // let numArray = toArray;



    // numberArray.forEach(function (num, index) {
    //     let numNumber = parseInt(num);
    //     if (numNumber < 5) {
    //         numNumber++;
    //         numberArray[index] = numNumber;
    //     } else if (numNumber > 5) {
    //         numNumber--;
    //         numberArray[index] = numNumber;
    //     }
    //     // debugger;
    // });

    // for(let i = 0; i<10; i++){
    //     let numNumber = parseInt(numberArray[i]);
    //         if (numNumber < 5) {
    //             numNumber++;
    //             numberArray[i] = numNumber;
    //         } else if (numNumber > 5) {
    //             numNumber--;
    //             numberArray[i] = numNumber;
    //         }
    // }
    //
    // let result;
    // result = parseInt(numberArray.join());
    // return result;
// }

// console.log( moveDigitsTowardFive(345689));
//
//     for (var i = 0; i<numArray.length; i++){
//         if(numArray[i]<5){
//             result += ( parseFloat(numArray[i])+1) ;
//         }else if(numArray[i]===5){
//             result += ( parseFloat( numArray[i]));
//         }else if(numArray[i]>5){
//             result += (parseFloat(numArray[i])-1);
//         }
//     }
//     return result;
// }
// console.log( moveDigitsTowardFive(343578));
    // const findFive =  number.match(/[5]/gi).length
//
//
//     numArray.map(element, index) =>{
//         return
//     }
// }












// Create a function, replaceVowels, that takes in two strings as input.
// The first string input may have 0 to many characters.
// The second string input may have 0 to 1 character.
// The function will return a string that is the equivalent of the first string
// but every vowel is replaced with the second string.
// Assume any letter character in the inputs will be in lowercase.
//
//     Examples...
//
// replaceVowels('cat', 'z') // returns 'czt'
// replaceVowels('apple', 'z') // returns 'zpplz'
// replaceVowels('codeup', '.') // returns 'c.d..p'
// replaceVowels('', '.') // returns ''
// replaceVowels('aaa', '.') // returns '...'
// replaceVowels('bbb', '.') // returns 'bbb'
//

console.log("");
console.log("Exercise #5");

function replaceVowels (input, a){
    let original, replaceA, result;;
    original= input.toString();
    replaceA = a;                                   //RegEx = Regular Expression
    const count = input.match(/[aeiou]/gi).length;  //regex pattern is used with math()
                                                    //with RegEx & match(), counted vowels.

    for (var i =0; i<input.length; i++){        //repeat for the length of the input
        original = original.toLowerCase();
        if(count > 0){                          //if 'count' finds more than 1 vowel, replace
            result = original.replaceAll("a",replaceA );
            console.log(result);
            break;
        }else{                                  //if not, just return input
            console.log(original);
            break;
        }
    }
}
replaceVowels("apple",".");




