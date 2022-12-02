//While Loops #2
console.log("While Loop #2");
console.log("");
console.log("Math.pow version:")

var i = 1;
while (i <17){
    let result;
    result = Math.pow(2,i);
    console.log( result);
    i++;
}

console.log("");
console.log("while loop version:")

//while loop version:
let numMultiply = 2;
let counter = 0;
while(counter<16) {
    console.log(numMultiply);
    numMultiply *= 2;
    counter++
}

console.log("");
console.log("for loop version:");
//for loop version:
for (let i = 0, num =2; i<16; i++){  //***You can assign multiple variables inside
    console.log(num);
    num *=2;
}

// num +=2    ===   num = num+2
// num -=2    ===   num = num-2
// num *=2    ===   num = num*2
// num /=2    ===   num = num/2
// num++      ===   num = num+1
// num--      ===   num = num-1



console.log("");
console.log("Do While Loop #1");
console.log("");

    //generate a random number in the beginning
    let randomCones = Math.floor(Math.random()*50)+50;
    let allCones = parseFloat(randomCones);
    console.log ("You have "+allCones+" cones today.");
    console.log("");
    // Math.floor(Math.random()*5)+1;
    // let sellingCones = Math.floor(Math.random()*5)+1;
    let remains = allCones;
    var i = 0;
    do {
        //generate a random number every loop
        let sellingCones = Math.floor(Math.random() * 5) + 1;

        if(remains === 0){
            console.log("Yay! I sold them all!");
            break;

        }else if(remains >= sellingCones){
            remains = remains - sellingCones;

            // cone or cones ->
            if(sellingCones <= 1) {
                console.log(sellingCones + " cone sold...");
            } else  console.log(sellingCones + " cones sold...");
            if (remains <=1) {
                console.log("       (" + remains + " cone left)");
            } else console.log("       ("+remains + " cones left)");
            ////

            console.log("");

        }else if(sellingCones > remains && remains !==0) {

            // cone vs cones ->
            if (sellingCones ===1){
                console.log("Cannot sell you " + sellingCones +" cone. I only have "+remains+"...");
            } else {
                console.log("Cannot sell you " + sellingCones + " cones. I only have " + remains+"...");
            } console.log("");
            ////

        //If it is 0, print a sentence & break

        // } else if( remains === 0){
        //     console.log("Yay! I sold them all!");
        //     break;
        } i++;

    } while (i<50);


// Version 2 of Do While exercise
console.log(" - - - - - - - - - -");
console.log("Version2");
console.log("");
function getRandomNum (min, max){
    return  Math.floor(Math.random() *(max-min+1)) + min;
}

let conesToSell = getRandomNum( 50, 100);
console.log(`You have ${conesToSell} cones today.`)
console.log("")
do{
    let conesToBuy = getRandomNum(1,5);
    if(conesToBuy <= conesToSell){
        conesToSell = conesToSell - conesToBuy;
        console.log(conesToBuy + " cone sold...");
        // console.log(conesToSell + " left");

    }else{
        console.log("Cannot sell you " + conesToBuy +" cone(s). I only have "+conesToSell+"...");

    }
    if (conesToSell === 0){
        console.log("Yay! I sold them all!");
        break;
    }
} while (conesToSell>0)







