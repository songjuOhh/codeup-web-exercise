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
    Math.floor(Math.random()*5)+1;
    let soldCones = Math.floor(Math.random()*5)+1;

    var i = 0;
    do {
        let remains = allCones;

        if(remains >= soldCones){
            remains = allCones - soldCones;
            console.log(soldCones + " cones sold...");

        }else if(soldCones > remains) {
            console.log("Cannot sell you" + soldCones +"cones. I only have "+remains);

        } else if(remains ===0){
            console.log("Yay! I sold them all!");
        }
        i++;
    } while (i<10);
}

canGoHome("");


