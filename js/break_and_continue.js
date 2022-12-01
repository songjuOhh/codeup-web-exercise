


let askNumber = prompt("Please pick a number from 1 to 50");
console.log("Break and Continue #2");
console.log("");

if(isNaN(askNumber)!==true) {

    if (askNumber % 2 !== 0) {

        askNumber = parseInt(askNumber);
        console.log("Number to skip is: " + askNumber);
        console.log("");
        for (var i = 0; i < 50; i++) {

            if (isNaN(askNumber) !== true) {

                if (i === askNumber) {
                    console.log("Yikes! Skipping number: " + i);
                    continue;
                } else if (i % 2 !== 0) {
                    console.log("Here is an odd number: " + i);
                }

                // if (i % 2 !== 0) {
                //     console.log("Here is an odd number: " + i);
                //
                // } else if (i === 27) {
                //     break;
                // }
                // text += "Yikes! Skipping number: " + askNumber;

            } else {
                console.log("You put invalid input.");
                break;
            }
        }

    } else {
        alert("Please enter odd number.");
    }
}else{
    alert ("Your input is not a number.")
}




console.log("");
console.log("");
console.log("- - - - - - - - - - -");
console.log("Below is the function for #3 Break and Continue exercise");

console.log("");

//Created function to create loop for invalid input
function askNumForSkip (askNumber2){

    askNumber2 = prompt("Please pick a number from 1 to 50");


    console.log("Number to skip is: " + askNumber2);
    console.log("");



    for(var i = 0; i<50; i++) {
        askNumber2 = parseFloat(askNumber2);

        if (isNaN(askNumber2) !== true && askNumber2%2 !==0) {

            if (i === parseFloat(askNumber2)) {
                console.log("Yikes! Skipping number: " + i);
                continue;
            } else if (i % 2 !== 0) {
                console.log("Here is an odd number: " + i);
            }
        }else if(isNaN(askNumber2) !== true && askNumber2%2 ===0){
            alert("Please enter an odd number.");
            askNumForSkip();
            break;

        } else {
            alert(`You have put invalid input. Please enter an odd number.`);
            askNumForSkip();
            break;
        }
    }
}
askNumForSkip("");






console.log("");
console.log("");
console.log("- - - - - - - - - - - - - - - - -");
console.log("Below is the function for #3 using while loop & for loop");

console.log("");
//using while loop
while(true){
    let userNum = prompt("Enter an odd number between 1 and 50");
    userNum = parseFloat(userNum);
    if (userNum %2 ===1 && userNum <=50 && userNum>=1 ){
        for(let i = 1; i<=50; i++){
            if(i === userNum){
                console.log("Yikes! Skipping number "+i);
            }else{
                console.log("Here is an odd number: " +i);
            }
        }
        break;
    } else {
        alert(`You have put invalid input. Please enter an odd number.`);
    }
    // Until you put correct input, it will stay in the loop.
}

