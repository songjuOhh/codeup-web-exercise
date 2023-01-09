function second(input){
    let second;
    second = input[1];
    return second;
}
console.log(second('ubuntu'))


function last (input){
    return input[input.length-1];
}
console.log(last('ubuntu'))

function hasEvens(array){
    let evenCount=0;
    for (let i=0; i<array.length; i++){
        if(array[i] % 2 ===0) {
            evenCount++;
        }
    }
    if (evenCount>0){
        return true;
    } else{
        return false;
    }
}

console.log(hasEvens([1,5,3]));


const shoppingCart = {
    "tax": .08,
    "items": [
        {
            "title": "orange juice",
            "price": 3.99,
            "quantity": 1
        },
        {
            "title": "rice",
            "price": 1.99,
            "quantity": 3
        },
        {
            "title": "beans",
            "price": 0.99,
            "quantity": 3
        },
        {
            "title": "chili sauce",
            "price": 2.99,
            "quantity": 1
        },
        {
            "title": "chocolate",
            "price": 0.75,
            "quantity": 9
        }
    ]
}


// #99
function getAverageItemPrice(array){
    let totPrice =0;
    for(let i=0; i<shoppingCart.items.length; i++){
        totPrice += shoppingCart.items[i].price;
    }
    totPrice = totPrice / shoppingCart.items.length;
    return totPrice;
}
console.log(getAverageItemPrice(shoppingCart));



// #100
function getAverageSpentPerItem (array){
    let totPrice =0 ,totQuant=0, totAvgPrice=0; avg=0;
    for(let i=0; i<shoppingCart.items.length; i++){
        totPrice = shoppingCart.items[i].price  * shoppingCart.items[i].quantity;
        totAvgPrice += totPrice;
        totQuant +=shoppingCart.items[i].quantity
    }
    avg = totAvgPrice/ totQuant;
    return avg;
}
console.log(getAverageSpentPerItem(shoppingCart));

// #101
function mostSpentOnItem(array){
    let totalSpent1 = 0, totalSpent2=0, mostSpent=0;
    for(let i=0; i<shoppingCart.items.length; i++){
        totalSpent1 += shoppingCart.items[i].price  * shoppingCart.items[i].quantity;
        console.log(totalSpent1);

        if(totalSpent1 >  mostSpent){
            mostSpent = shoppingCart.items[i];
        }else {
            mostSpent = mostSpent;
        }

    }
    return mostSpent;

}

console.log(mostSpentOnItem(shoppingCart));
