// While loop
let i = 0; // i : iteration
while (i < 10){
    console.log(`While loop #${i}.`); // = ("While loop #" + i + ".");
    i++;
}


// Do While loop
i = 0;
do{
    console.log(`Do While loop #${i +1}`);
    i++;
} while( i<10);


// For loop ++ : incrementing
for(i =0; i<10; i++){
    console.log(`For loop (+) #${i }`);
}


// For loop -- : decrementing
for(i =10; i>0; i--){
    console.log(`For loop (-) #${i }`);
}

console.log("")
console.log("version 1");
// loop through an array, and
// print the string in each item in a sentence BESIDES: cucumber

let array = ["oranges", "apples", "pineapples","pears","grapes","tomatoes","cucumber"];
for(let i = 0; i<array.length-1; i++){
    console.log(`I like ${array[i]}.`);
}


console.log("")
console.log("version 2");
// print I like everything except cucumber
for(let i = 0; i<array.length; i++){
    if(array[i]==="cucumber"){
        console.log(`Wait. I dont like ${array[i]}.`);
    }else {
        console.log(`I like ${array[i]}.`);
    }
}


console.log("")
console.log("version 3 - continue");
// print until it finds pineapple and 'break'
for(let i = 0; i<array.length; i++){
    if(array[i]==="pineapples"){
        console.log(`I found ${array[i]}!!! I'm DONEEE.`);
        break;
    }else {
        console.log(`I like ${array[i]}.`);
    }
}


console.log("")
console.log("version 4 - break");
// print until it finds pineapple and 'continue' printing
for(let i = 0; i<array.length; i++){
    if(array[i]==="pineapples"){
        console.log(`I found ${array[i]}! But, I will continue.`);
        continue;
    }else {
        console.log(`I like ${array[i]}.`);
    }
}


