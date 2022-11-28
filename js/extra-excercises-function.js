// #1
function isOdd (number){
    if (number%2 !== 0){
        console.log(number+" is odd");

    }else {
        console.log(number + " is not odd");
    }
}
isOdd(1);

// #2
function isEven (number){
    if (number%2 !== 0){
        console.log(number+" is even");

    }else{
        console.log(number+" is not even");
    }
}
isEven(1);


function identity(input){

    console.log(input);
}
identity("Hello");


//#4
function isFive(input){
    if (input === 5){
        console.log("true");
    }else{
        console.log("false");
    }
}
isFive(5);

function addFive(input){
    return input+5;
}
console.log(addFive(5));

//#5
function isMultipleOfFive(input){
    if (input %5 ===0){
        console.log("true");
    }else{
        console.log("false");
    }
}
isMultipleOfFive(25);

//#6
function isThree(input){
    if (input === 5){
        console.log("true");
    }else{
        console.log("false");
    }
}
isThree(3);

//#7
function isMultipleOfThree(input){
    if (input %3 ===0){
        console.log("true");
    }else{
        console.log("false");
    }
}
isMultipleOfThree(6);

//#8
function isMultipleOfThreeAndFive(input){
    if (input %5 ===0 && input%3 === 0){
        console.log("true");
    }else{
        console.log("false");
    }
}
isMultipleOfThreeAndFive(15);

//#9
function isTrue(boolean){
    if(boolean === true){
        return true;
    }else{
        return false;
    }
}
console.log(isTrue(true));

//#10
function isFalse(boolean){
    if(boolean === false){
        return true;
    }else{
        return false;
    }
}
console.log(isFalse(true));


//#11
function isTruthy(input){
    if(input === true){
        return true;
    }else{
        return true;
    }
}
console.log(isTruthy(false));

//#12
function isFalsy(input){
    if(input === true){
        return false;
    }else{
        return false;
    }
}
console.log(isFalsy(false));

//#13
function isVowel(letter){
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" ){
        return true;
    }else{
        return false;
    }
}
console.log(isVowel("a"));

//#14
function isConsonant(letter){
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" ){
        return false;
    }else{
        return true;
    }
}
console.log(isConsonant("b"));

//#15
// function isCapital(letter){
//     if(letter.charCodeAt(0)>= 65 && letter.charCodeAt(0) <= 90){
//         return true;
//     }else{
//         return false;
//     }
// }
function  isCapital (letter){
    if (letter == letter.toUpperCase()){
        return true;
    }else{
        return false;
    }
}
console.log(isCapital("b"));

//#16-1
// function isLowerCase (letter){
//     if(letter.charCodeAt(0)>= 65 && letter.charCodeAt(0) <= 90){
//         return false;
//     }else{
//         return true;
//     }
// }

function  isLowerCase (letter){
    if (letter.toLowerCase().includes()){
        return false;
    }else{
        return true;
    }
}
console.log(isLowerCase("B"));

//#17
function hasLowerCase (string){
    var upperString = string.toUpperCase();
    if (string !== upperString)
        return true;
    else return false;
}
console.log(hasLowerCase("HaX"));


function isSpace (letter){
    var space = " ";
    if (letter === space)
        return true;
    else return false;
}
console.log( isSpace(" "));


function isZero (input){
    if (input === 0)
        return true;
    else return false;
}
console.log( isZero(0));


function notZero (input){
    if (input !== 0)
        return true;
    else return false;
}
console.log( notZero(0));


function lowerCase (string){
    var lowered = string.toLowerCase();
    return lowered;
}
console.log(lowerCase("YeaahH"));


function double(n){
    let doubled;
    doubled = n *2;
    return doubled;
}
console.log(double(4));


function triple(n){
    let result;
    result = n *3;
    return result;
}
console.log(triple(4));


function quadruple (n){
    let result;
    result = n *4;
    return result;
}
console.log(quadruple(4));


function half (n){
    let result;
    result = n /4;
    return result;
}
console.log(half(4));

function subtract (a, b){
    let result;
    result = a-b;
    return result;
}
console.log(subtract(4,2));


function multiply (a, b){
    let result;
    result = a*b;
    return result;
}
console.log(multiply(4,2));


function divide (a, b){
    let result;
    result = a/b;
    return result;
}
console.log(divide(4,2));


function remainder (a, b){
    let result;
    result = a%b;
    return result;
}
console.log(remainder(2,2));


function modulo (a,b){
    let result;
    result = a%b;
    return result;
}
console.log(modulo(7,2));


function cube (n){
    let result;
    result = n*n*n;
    return result;
}
console.log( cube(3));


function squareRoot(n){
    let result;
    result = Math.sqrt(n);
    return result;
}
console.log( squareRoot(4));


function cubeRoot(n){
    let result;
    result = Math.cbrt(n);
    return result.toFixed(2);
}
console.log( cubeRoot(4));


function invertSign(n){
    if(isNaN(n)!==true) {
        let result;
        result = -(n);
        return result;
    }else{
        return false;
    }
}
console.log( invertSign(4));
console.log( invertSign("n"));


function degreesToRadians(number){
    let result;
    let pi = Math.PI;
    result = number *(pi/180);
    return result;
}
console.log( squareRoot(4));


