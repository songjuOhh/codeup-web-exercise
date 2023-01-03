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

