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
while (count<50) {

    for (var i = 0; i < 100; i++) {

        if (i === 2 || i === 3 || i === 5 || i === 7) {
            count++;
            console.log(i);
        } else if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            continue;

        }else if(count ===50){
            break;
        } else {
            count++;
            console.log(i);
        }
    }
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




