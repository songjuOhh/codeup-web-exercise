function returnFive (){
    return 5;
}
console.log( returnFive());

function isFive (input){
    if (input === 5){
        return true;
    }else{ return false;}
}
console.log(isFive(5));

function isShortWord(input){
    if(input.length < 5){
        return true;
    }else{ return false;}
}
console.log(isShortWord("Yeah"));

function isSameLength (a,b){
    if(a.length === b.length){
        return true;
    }else{ return false;}
}
console.log(isSameLength("yeah","wooh"));

function getSmallerSegment (string, number){
    return string.substring(0,number);
}
console.log(getSmallerSegment("codeup",3));


function returnTwo(){
    return 2;
}
console.log( returnTwo());


function returnName(){
    return "songJu";
}
console.log(returnName());


function addThree(num){
    return parseFloat(num)+3;
}
console.log(addThree(5));

function sayHowdy(){
    console.log( "Howdy!");
}
sayHowdy();

function abbrevToDay (input){
    switch (input){
        case "mon":
            console.log("Monday");
            break;
        case "tue":
            console.log("Tuesday");
            break;
        case "wed":
            console.log("Wednesday");
            break;
        case "thu":
            console.log("Thursday");
            break;
        case "fri" :
            console.log("Friday");
            break;
        case "sat" :
            console.log("Saturday");
            break;
        case "sun" :
            console.log("Sunday");
            break;
    }
}
abbrevToDay("sun");