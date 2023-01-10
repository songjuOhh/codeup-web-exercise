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

