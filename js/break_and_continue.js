console.log("Break and Continue #2");
console.log("");


let askNumber = prompt("PLease pick a number from 1 to 50");
if(askNumber %2 !==0){

    askNumber = parseInt(askNumber);
    console.log("Number to skip is: " + askNumber);
    console.log("");
    for(var i = 0; i<50; i++) {

        if (isNaN(askNumber) !== true) {


            if (i === askNumber) {
                console.log("Yikes! Skipping number: " + i);
                continue;
            }else if(i%2 !==0){
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

}else{
    alert ("Please enter odd number.");
}





console.log("");
console.log("Break and Continue #3");
console.log("");

//Created function to create loop for invalid input
function askNumForSkip (askNumber2){

    askNumber2 = prompt("PLease pick a number from 1 to 50");
    askNumber2 = parseInt(askNumber2);
    console.log("");
    console.log("- - - - - - - - - - -");
    console.log("Below is the function for #3 Break and Continue exercise");
    console.log(" ");
    console.log("Number to skip is: " + askNumber2);
    console.log("");

    for(var i = 0; i<50; i++) {

        if (isNaN(askNumber2) !== true) {

            if (i === askNumber2) {
                console.log("Yikes! Skipping number: " + i);
                continue;
            }else if(i%2 !==0){
                console.log("Here is an odd number: " + i);
            }
        } else {
            console.log("You put invalid input.");
            askNumForSkip();
            break;
        }
    }
}
askNumForSkip("");

