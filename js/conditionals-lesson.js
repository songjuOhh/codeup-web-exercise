let city = "San Antonio";
if (city==="Boston"){
    console.log("The location is Boston");
} else if(city ==="San Antonio") {
    console.log("The location is San Antonio")
} else{    
    console.log("We don't know where it is");
}


let pizzaPreference = prompt("What is your fav kind of pizza?");
if(pizzaPreference.toLowerCase() == "cheese" || pizzaPreference.toLowerCase() == "pepperoni"||pizzaPreference.toLowerCase() == "mixed"){
    console.log("Thanks Kevin from Home Alone!");
}else if(pizzaPreference.toLowerCase() == "pineapple"){
    console.log("Ewww pineapple? Imma report to Gordan Ramsey!");
}else{
    console.log("Ummm okay... My aunt is vegan too..");
}

let success = true;

//Traditional conditional statement.

// let message;
// if (success){
//     message = "The operation was successful"
// } else{
//     message = "The operation was not successful"
// }




//Switch conditional statement
//it is cleaner BUT!
//**Switch can only be used for 'Specific' cases. = cannot use or/and/comparison**
//compare with if statement above. Take a look at "cheese", "pepperoni", "mixed"

let pizzaPreference2 = prompt("What kind of pizza do you like?")
switch (pizzaPreference2){
    case "cheese" :
        alert("Thanks Kevin from Home Alone!");
        break;

    case "pepperoni" :
        alert("Thanks Kevin from Home Alone!");
        break;

    case "mixed" :
        alert("Thanks Kevin from Home Alone!");
        break;

    case "pineapple" :
        alert("Ewww pineapple? Imma report to Gorden Ramsey!");
        break;

    default:
        alert("Ummm okay... My aunt is vegan too..");
        break;
}


//Simpler statement
//**Only works the best with True/False conditions - very easy to get ugly
let message = success ? "The operation was successful" : "The operation was not successful"
console.log(message);
