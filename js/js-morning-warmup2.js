    const strs = [
    {
        id: 1,
        str: 'hello'
    },
    {
        id: 2,
        str: 'world'
    },
    {
        id: 3,
        str: 'codeup'
    },
    {
        id: 4,
        str: 'x'
    }
]





function reverseStrings (array) {
    let newArray = [];
    array.forEach(function (element) {
        let letter = element.str.split('')
        const reversed = letter.reverse().join('')
        const newOutput = {
            id: letter.id,
            str: reversed
        }
        console.log(reversed)
        newArray.push(newOutput)

    })
    return newArray;
}

    console.log(reverseStrings(strs));





    // Feel free to solve the following exercises however you like. You can create a function or solve it without
    // the use of a function. Example inputs are given. Feel free to change it to different values.





    // ********************** Exercise 1 STARTS HERE **********************
    // Get the sum of two arrays...actually the sum of all their elements.
    // P.S. Each array includes only integer numbers.
    // Example input arrays:
    let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
    let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
    // Example output:
    // 627

    // *********** YOUR CODE HERE **********************

    function sumArray (array1, array2){
        let sum = 0;
        array1.forEach(function(array1){
            sum+=array1;
        })
        array2.forEach(function(array2){
            sum+=array2;
        })
        return sum;
    }

    console.log(sumArray(arr_1,arr_2));







    // ********************** Exercise 2 STARTS HERE **********************
    // Using a for loop print all even numbers up to and including n. Don’t include 0.
    let n1 = 22;
    // Example output:
    // 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

    // *********** YOUR CODE HERE **********************

    function allEven(input){
        let even = [];
        for (let i =0; i<=input; i++){
            if(i%2 === 0 && i!==0){
                even.push(i)
                // console.log(even)
            }
        }
        return even;
    }
    console.log(allEven(n1));








    // ********************** Exercise 3 STARTS HERE **********************
    // Using a for loop output the elements in reverse order
    let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
    // Example output:
    // true 3  be  false cannot  true 9 what 43 OR each item on a new line

    // *********** YOUR CODE HERE **********************

    function reverseArray (array){
        let reversed = [];
        for(let i =array.length-1; i>-1; i--){
            reversed.push(array[i])
        }
        return reversed;
    }
    console.log(reverseArray(arr))






    // ********************** Exercise 4 STARTS HERE **********************
    // Given two arrays of integers. Add up each element in the same position and create a new array containing the sum of each pair. Assume both arrays are of the same length.
    let arr_3   = [4, 6, 7];
    let arr_4	= [8, 1, 9];
    // Example output:
    // [12, 7, 16]

    // *********** YOUR CODE HERE **********************

    function sumArrays(arr1, arr2){
        let summed = [];
        for(let i =0; i<arr1.length; i++){
            summed.push( arr1[i] + arr2[i])
        }
        return summed;
    }

    console.log(sumArrays(arr_3,arr_4))








    // ********************** Exercise 5 STARTS HERE **********************
    // Given a string change the every second letter to an uppercase  ‘Z’. Assume there are no space.
    let str1 = "javascript";
    // Example output:
    // jZvZsZrZpZ OR each letter on a new line

    // *********** YOUR CODE HERE **********************

    function secondUpper (input){
        let splitted = input.split(''), newArray=[];
        console.log(splitted)
        for(let i = 0 ; i<input.length; i++){
            if(i%2===1 ){
                newArray.push('Z')
            }else{
                newArray.push(splitted[i])
            }
        }
        let newString = newArray.join('')
        return newString;
    }
    console.log(secondUpper(str1))








    // ********************** Exercise 6 STARTS HERE **********************
    // Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
    let str2 = "don’t know why";
    // Example output:
    // “yes”

    // *********** YOUR CODE HERE **********************
    function hasY(input){
        let splitInput = input.split(''), yesOrno ='';
        splitInput.forEach(function(element){
            if(element.toLowerCase().includes('y')){
                yesOrno = 'yes'
            }else{
                yesOrno = 'no'
            }
        })
        return yesOrno;
    }
    console.log(hasY(str2))







    // ********************** Exercise 7 STARTS HERE **********************
    // Given a number n Calculate the factorial of the number
    let n2 = 4; //  4 * 3 * 2 * 1 = 24
    // Example output:
    // 24

    // *********** YOUR CODE HERE **********************
    function factorial (input){
        for(let i = input-1; i>=1; i--){
            input = input*i
        }
        return input;
    }
    console.log(factorial(n2))







    // ********************** Exercise 8 STARTS HERE **********************
    // Write a program that will allow someone to guess a four digit pin exactly 4 times.
    // If the user guesses the number correctly.
    // It prints  “That was correct!”
    // Otherwise it will print “Sorry that was wrong.”
    // Program stops after the 4th attempt of if they got it right.

    // let pin = 0704;

    // Example output:
    // Please make your guess:
    // 4544
    // Sorry that was wrong.
    // Please make your guess:
    // 4444
    // Sorry that was wrong.
    // Please make your guess:
    // 0704
    // That was correct!

    // *********** YOUR CODE HERE **********************








    // ********************** Exercise 9 STARTS HERE **********************
    // Write a program that will check if two strings are palindromes.
    // A palindrome is a word that spells the same forward and backward.
    // Palindrome: a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
    let str3 = "racecar";
    let str4 = "Java";
    // Example output:
    // string1 palindrome?:
    // Yes
    // string2 palindrome?:
    // No

    // *********** YOUR CODE HERE **********************

    function palindrome(input){
        let newArray =[];
        let reversed = input.split('').reverse().join('')
        if(input === reversed){
            return 'Yes'
        }else{
            return 'No'
        }
    }
    console.log(palindrome(str4));









    // ********************** Exercise 10 STARTS HERE **********************
    // This is a code wars kata. click here to train on “Grasshopper – Summation” on code wars.
    // Write a program that finds the summation of every number from 1 to num.
    // The number will always be a positive integer greater than 0.
    let num1 = 2;
    let num2 = 8;
    // Example output:
    // 1 + 2 = 3
    // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36

    // *********** YOUR CODE HERE **********************
    function summation (input){
        let sum = '';
        for(let i = input-1; i>=1; i--){
            input = input+i
            console.log(i)
        }
        return input;
    }
    console.log(summation(num1))



