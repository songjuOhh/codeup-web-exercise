console.log("#2");
//#2
function showMultiplicationTable (number){
    for (var i = 1; i<11; i++){
        let multipled = number * i;
        let showM = number + " x "+ i + " = " + multipled;
        console.log( showM);
    }
}
showMultiplicationTable(7);


// for (var i = 0, j = 9; i < 10; i++, j--) {
//     console.log('for loop i #' + i + ', j = ' + j);
// }


// let randomNumber = number[Math.floor(Math.random() * colors.length)];
// var luckyNumber = Math.floor(Math.random() * 6);
console.log("");
console.log("#3 - Version 1");
//Version 1: basic for loop with a condition
for(var i =0; i<3; i++){
    var randomNumber = Math.floor(Math.random()*200)+20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even");
    } else if (randomNumber % 2 === 1) {
        console.log(randomNumber + " is odd");
    }
}
console.log("");

console.log("#3 - Version 2");
//Version 2: used function for input
function randomEvenOdd (min, max){
    for(var i = 0; i<3; i++) {
        //generate random number between min & max
        var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        if (randomNumber % 2 === 0) {
            console.log(randomNumber + " is even");
        } else if (randomNumber % 2 === 1) {
            console.log(randomNumber + " is odd");
        }

        // let randomNum = randomEvenOdd(20,200);
        // let isEven = randomNum %2 ===0;
        // let answer =  `${randomNum} is ${isEven}`;even : odd;
    }
}
randomEvenOdd(20, 200);

console.log("");
console.log("#4");
//Version 1 number pyramud
for(let i = 1; i<10; i++){
    let number = '';
    for(let j = 1; j<=i; j++){
        number += i;
    }
    console.log(number);
}

//Version 2 number pyramid
for(let i = 0; i<9; i++){
    let answer = String(i+1).repeat(i+1);
    console.log(answer);
}

for(let i = 1; i<10; i++){
    let number = 0;
    for(let j = 1; j<=i; j++){
        number += 1;
    }
    console.log(number);
}



console.log("");
console.log("#5 - Version 1");


// Version 1: used for loop only, but hard coded
for(var i = 0; i<20; i++){
    console.log(100-(i*5));
}

console.log("");

console.log("#5 - Version 2");
// Version 2: used function for input
function minusFive (number){
    let outcome ='';
    for (var i = 0; i<number; i++){
        outcome = number - (i*5);
        if(outcome === 0){
            break;
        }
    console.log(outcome);
    }
}
minusFive(50);

// Version 3
for(let y = 100; y>=5; y-=5){
    console.log(y);
}