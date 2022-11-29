//While Loops #2
console.log("While Loops #2");
console.log("");
var i = 1;

while (i <17){
    let result;
    result = Math.pow(2,i);
    console.log( result);
    i++;
}


//Do
console.log("");
console.log("Do While Loops #1");
console.log("");
function letsSellCones(cones){
    let randomCones = Math.floor(Math.random()*50)+50;
    let allCones = parseFloat(randomCones);
    console.log ("You have "+allCones+" cones today.");
    // Math.floor(Math.random()*5)+1;
    // let sellingCones = Math.floor(Math.random()*5)+1;
    let remains = allCones;
    var i = 0;
    do {
        let sellingCones = Math.floor(Math.random()*5)+1;

        if(remains >= sellingCones){
            remains = remains - sellingCones;

            // cone or cones
            if(sellingCones <= 1) {
                console.log(sellingCones + " cone sold...");
            } else  console.log(sellingCones + " cones sold...");
            if (remains <=1) {
                console.log("       (" + remains + " cone left)");
            } else console.log("       ("+remains + " cones left)");

            console.log("");

        }else if(sellingCones > remains && remains !==0) {

            // cone vs cones
            if (remains ===1){
                console.log("Cannot sell you " + sellingCones +" cone. I only have "+remains);
            } else {
                console.log("Cannot sell you " + sellingCones + " cones. I only have " + remains);
            } console.log("")

        } else if( remains === 0){
            console.log("Yay! I sold them all!");
            break;
        } i++;

    } while (i<50);
}

letsSellCones("");


