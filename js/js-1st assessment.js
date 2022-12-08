/**
 *
 *
 */



function isNumeric(input) {
    return !isNaN(parseFloat(input));
}

function gettingHighestNumber(input1, input2, input3){
    if(isNumeric(input1) && isNumeric(input2) && isNumeric(input3)){    // isNumeric
        if(input1 > input2 && input1>input3){
            return input1;
        }else if(input2> input1 && input2 >input3){
            return input2;
        }else{
            return input3;
        }


    }else{
        return false;
    }
}

function parseNumber (input){
    return Number(input);
    // return parseFloat(input);
}

function add(input1, input2){
    if(isNumeric(input1) && isNumeric(input2)){
        return parseFloat(input1) + parseFloat(input2);
    // }else{
    //     return false;
    }
    return false;
}

// function multiply(input1, input2){
//     if(isNumeric(input1) && isNumeric(input2)){
//         return parseFloat(input1) * parseFloat(input2);
//         // }else{
//         //     return false;
//     }
//     return false;
// }

function multiply(input1){
    if(isNumeric(input1)){
        // return parseFloat(input1) * parseFloat(input1);
        return input1 * input1;

        // }else{
        //     return false;
    }
    return false;
}

function sumOfSquares(input1, input2){
    if(isNumeric(input1) && isNumeric(input2)){
        return (input1*input1) + (input2*input2);

        // }else{
        //     return false;
    }
    return false;
}

function isPalindrome(input){
    let array = [];
        if(typeof(input)!=='string'){
            return false;
        }else{
            let reversedInput = '';
            for (let i = input.length -1; i>=0; i++) {
                reversedInput +=input[i];
            }
            return input.toLowerCase() === reversedInput.toLowerCase();

            // let reversedInput = input.split('').reverse().join('');
            // return input.toLowerCase() === reversedInput.toLowerCase();
        }

}

// function isPalindrome(input){
//     let array = [];
//     if(typeof(input)!=='string'){
//         return false;
//     }else{
//         let reversedInput = input.split('').reverse().join('');
//         return input.toLowerCase() === reversedInput.toLowerCase();
//     }
// }