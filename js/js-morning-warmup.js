function returnTwoChars(input){
    let two='';
    two += input.slice(-2);
    // two += input.slice(-2);
    return two;

}

console.log( returnTwoChars('string'));


function returnLastCharsReversed(input, num){

    return input.split('').reverse().slice(0, num).join('');
    // let string=[];
    // string = input;
    // string.split("").reverse().join();
    //
    // // string = string.slice(-num);
    // return string;
}

console.log(returnLastCharsReversed('Hello',2));


function returnLastCharsReversed2(input, num){
    let array=[], result;
    for(let i=0; i<input.length; i++){
        array += input[i];
    }
    result= array.split('').reverse().join('');
    num = parseFloat(num);

    result= result.slice(0,num);
    return result;

}
console.log(returnLastCharsReversed2('Hello',2));


//Write a function, iBeforeE that takes in a string and returns the string with any ‘ei’ characters replaced with ‘ie’.
// iBeforeE(‘ei’) // returns ‘ie’
// iBeforeE(‘height’) // returns ‘hieght’
// iBeforeE(‘heist’) // returns ‘hiest’
// iBeforeE(‘their’) // returns ‘thier’
// iBeforeE(‘theirtheir’) // returns ‘thierthier’

function iBeforeE (input){
    if (input.includes('ei')){
        input = input.replaceAll('ei','ie');
        return input;
    }
}



console.log(iBeforeE('eightuee'));


function iBeforeE2(str) {
    let output = '';
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] + str[i + 1] === 'ei') {
            output += 'ie';
            i++;
        } else {
            output += str[i];
        }
    }
    return output;
}


const iBefore3 = string => string.split("ei").join("ie");



// Create a function, filterList, that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// filterList([1,2,‘a’,‘b’]) // returns [1,2]
// filterList([1,‘a’,‘b’,0,15]) // returns [1,0,15]
// filterList([1,2,‘aasf’,‘1’,‘123’,123]) // returns [1,2,123]

let d = [1,2,3,4,5];
console.log(d[1])
console.log(typeof (d[1]));

function filterList(array){
    let newList = [];
    for(let i=0; i<array.length; i++){
        if(typeof array[i]!=='string') {
            newList.push(array[i]);
        }
    }
    return newList;
}
console.log(filterList([1,2,'a','b']));


function filterList2(array){
    let newList = [];
    for(let i=0; i<array.length; i++){
        if(typeof array[i]==='number') {
            newList.push(array[i]);
        }
    }
    return newList;
}
console.log(filterList2([1,2,'a','b']));


function zipArrays(array1, array2){
    let newArray=[];
    for(let i=0; i<array1.length; i++){
        newArray.push(array1[i]);
        newArray.push(array2[i]);
    }
    return newArray;
}

console.log(zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25]));

// Create a function, zipArrays, that takes two array inputs of the same length and returns an array with the elements of both arrays alternating in the order of first[0], second[0], first[1], second[1], etc. If both arrays are empty, return an empty array.
//
//
// zipArrays([], []) // returns []
// zipArrays([1], [2]) // returns [1, 2]
// zipArrays(['a', 'b'], ['c', 'd']) // returns... ['a', 'c', 'b', 'd']
// zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25]) // returns...
//
//     [
//     1,
//         'bob',
//         2,
//         null,
//         'a',
//         'sally',
//         'b',
//         25
//     ]

const users = [
    {
        firstName: 'Justin',
        lastName: 'Reich',
        dob: '1923-01-01',
        username: 'jreich',
        password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
    },
    {
        firstName: 'Sally',
        lastName: 'Smith',
        dob: '1935-03-11',
        username: 'ssmith',
        password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
    },
    {
        firstName: 'Fred',
        lastName: 'Smith',
        dob: '1999-01-21',
        username: 'fsmith',
        password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
    },]

function getUserCredentials (array){
    const userAccount = [{}];
    for(let i =0; i<array.length; i++){
        userAccount.push(
            `{ username:  ${array[i].username} \n password:  ${array[i].password}}`);
    }
    return userAccount;
}
console.log(getUserCredentials( users));




function getUserCredentials2(users) {
    const credentials = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        credentials.push({ username: user.username, password: user.password });
    }
    return credentials;
}
console.log(getUserCredentials2( users));

let array =['a',' b', 'c', 'D', 'E']
function shiftElementsOver (array){
    let newArray = [] ;
    for(let i=0; i<array.length; i++){
        newArray.push(array[i]);
    }
    newArray[0].toUpperCase();
    newArray.join('');
    return newArray;
}

array.forEach(function (array){
    let newArray = [] ;
    newArray.push(array);


})

console.log(shiftElementsOver(['a',' b', 'c', 'D', 'E']));


function shiftElementsOver2 (array){
    let newArray2 = [] , last;

}

console.log(shiftElementsOver2(['bob', 'sally', 'mary']));

/** You can use array functions such as:
 someArray.push()    = adds new last element
 someArray.pop()     = removes last element
 someArray.unshift() = adds new first element
 someArray.shift()   = removes first element
 *** for objects inside array ***
 */

function sumUp (input){
    let arrayN = [];

}



// const neighborhood1 = {
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 6},
//         {name: "High School", rating: 8}
//     ]
// };
//
// console.log(neighborhood1.schools[0].rating)

// ================================= WARM UP

const neighborhood1 = {
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 6},
        {name: "High School", rating: 8}
    ]
};

const neighborhood2 = {
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "high",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 8},
        {name: "High School", rating: 8}
    ]
}

const neighborhood3 = {
    neighborhood: "Oak Mountain",
    medianHomePrice: 290000,
    pool: false,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 8},
        {name: "Middle School", rating: 8},
        {name: "High School", rating: 8}
    ]
}

const neighborhood4 = {
    neighborhood: "Ginormous Acres",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "Elementary School", rating: 9},
        {name: "Middle School", rating: 9},
        {name: "High School", rating: 9}
    ]
}

function isGoodPLace(array){
    let rating=0, result;

    for (let i = 0; i<array.schools.length; i++){
        rating += array.schools[i].rating;
    }
    console.log(rating);


    if(array.medianHomePrice < 300000 &&  rating >= 24 && array.crimeRate === "low"){
        console.log('It is a good place to live');
        result = true;
    }else if(array.crimeRate === "high"){
        console.log('Not qualified due to high crime rate');
        result = false;
    }else if(array.medianHomePrice > 300000){
        console.log('Not qualified due to high house price');
        result = false;
    }else if(rating < 24 ){
        console.log('Not qualified due to low average school ratings');
        result = false;
    }
    return result;
}
console.log(isGoodPLace(neighborhood2));

function removeA(input){
    let array = [];
    for (let i =0 ; i<input.length; i++){
        if(input[i].toLowerCase() === 'a') {
            array.push('@')
        }else if(input[i].toLowerCase()=== 's'){
            array.push('$')
        }else if(input[i].toLowerCase()=== 'i'){
            array.push('1')
        }else{
            array.push(input[i]);
        }
    }
    array = array.join('')
    return array;
}
console.log(removeA('spple'));



function removeA2 (input){
    let lowered = input.toLowerCase(), uppered = input.toUpperCase();
    for (let i = 0; i < input.length; ) {
        lowered = lowered.replaceAll('a', '@');
        lowered = lowered.replaceAll('i', '1');
        lowered = lowered.replaceAll('s', '$');
    }
    // lowered = lowered.replaceAll('a', '@');
    // lowered = lowered.replaceAll('i', '1');
    // lowered = lowered.replaceAll('s', '$');
return lowered;
}

console.log(removeA2('appleii'))


function removeA3 (input){
    return input
        .replace(/a/gi,"@")
        .replace(/s/g,"$")
        .replace(/i/gi, "1");
}

console.log(removeA3('sass'));

// Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:
//
// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomes ‘$’
//
// encodeStr(‘apple’) // returns ‘@pple’
// encodeStr(‘codeup’) // returns ‘codeup’
// encodeStr(‘SASS’) // returns ‘$@$$’
// encodeStr(‘bike’) // returns ‘b1ke’

// Write a function that takes a neighborhood object and determines if it is desirable.
// A neighborhood is desirable if the median home price is less than 300000,
// crime rates are low, and the total rating of schools is at least 24.

// example data...

const strs = [
    {
        id: 1,
        str: 'hello'
    },
    {
        id: 2,
        str: 'world'
    }]

function reverseStrings (array){
    let reversed = array.split('')
    console.log(reversed)    // return reversed;
}

console.log(reverseStrings(strs))

// Make a function, reverseStrings, that takes in an array of objects and reverses the value of the 'str' properties.
//
//
//     const strs = [
//     {
//         id: 1,
//         str: 'hello'
//     },
//     {
//         id: 2,
//         str: 'world'
//     },
//     {
//         id: 3,
//         str: 'codeup'
//     },
//     {
//         id: 4,
//         str: 'x'
//     }
// ]
//
// reverseStrings(strs) // returns...
//
//     [
//     {
//         id: 1,
//         str: 'olleh'
//     },
//         {
//             id: 2,
//             str: 'dlrow'
//         },
//         {
//             id: 3,
//             str: 'puedoc'
//         },
//         {
//             id: 4,
//             str: 'x'
//         }
//     ]

//
// fn(neighborhood1) // returns false due to school rating
// fn(neighborhood2) // returns false due to crime rate
// fn(neighborhood3) // returns true
// fn(neighborhood4) // returns false due to median home price



// Create a function, shiftElementsOver, that takes in an array and returns the array with all elements moved one index further into the array. The final element should be moved to the front. Assume the input array will have three or more elements.
//
//
// shiftElementsOver([1, 2, 3, 4, 5]) // returns [5, 1, 2, 3, 4]
// shiftElementsOver(['bob', 'sally', 'mary']) // returns ['mary', 'bob', 'sally']
// shiftElementsOver([null, 123, 'hello world', true]) // returns [true, null, 123, 'hello world']


//
// Write a function, getUserCredentials, that takes in a list of user objects and returns a list of user objects with only the username and password properties. Assume at least an array of one user object.


    // const users = [
    // {
    //     firstName: 'Justin',
    //     lastName: 'Reich',
    //     dob: '1923-01-01',
    //     username: 'jreich',
    //     password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
    // },
    // {
    //     firstName: 'Sally',
    //     lastName: 'Smith',
    //     dob: '1935-03-11',
    //     username: 'ssmith',
    //     password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
    // },
    // {
    //     firstName: 'Fred',
    //     lastName: 'Smith',
    //     dob: '1999-01-21',
    //     username: 'fsmith',
    //     password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
    // }]
//
// getUserCredentials(users) // returns...

/*

[
  {
    username: 'jreich',
    password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
  },
  {
    username: 'ssmith',
    password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
  },
  {
    username: 'fsmith',
    password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
  }
]

*/


// This loop should print the numbers from 0 through 9 in the console

// for (let i = 0; i < 10; i++) {
//     console.log("The value of i is " + i);
//
// }

// desired output : 0, 1 ,2,  3, 4, 5, 6, 7, 8, 9
// let i =[1,2,3,4,5]
// console.log( i.length);





// // ✅ Get the last character of a string using charAt()
//         const last = str.charAt(str.length - 1);
//         console.log(last); // 👉️ e
//
// // ✅ Get the last character of a string using slice()
//         const lst = str.slice(-1);
//         console.log(lst); // 👉 'e'
//
//         const lst2 = str.slice(-2);
//         console.log(lst2); // 👉️ 'de'
//
// // ✅ Get the last character of a string using String.at()
//         const last_ = str.at(-1);
//         console.log(last_); // 👉️ e

