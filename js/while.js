var i = 1;

while (i <17){
    let result;
    result = Math.pow(2,i);
    console.log( result);
    i++;
}

function canGoHome(cones){
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
            if(sellingCones <= 1 || remains <=1){
                console.log(sellingCones + " cone sold...");
                console.log("       ("+remains+ " cone left)");
            }else {
                console.log(sellingCones + " cones sold...");
                console.log("       ("+remains + " cones left)");
            }
            console.log("");

        }else if(sellingCones > remains && remains !==0) {
            console.log("Cannot sell you " + sellingCones +" cones. I only have "+remains);
            console.log("")

        } else if( remains === 0){
            console.log("Yay! I sold them all!");
            break;
        } i++;

    } while (i<50);
}
canGoHome("");


