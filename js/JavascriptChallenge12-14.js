// ================================= WARM UP
//
// Create a function, findAverageDogAge,
// that takes in a array of pet objects with age properties and returns the average age of a dog.
//

const pets = [
    {
        name: 'Sparky',
        type: 'Fish',
        age: 4
    },
    {
        name: 'Mr. Pig',
        type: 'Cat',
        age: 4
    },
    {
        name: 'Bubba',
        type: 'Dog',
        age: 5
    },
    {
        name: 'Pickles',
        type: 'Dog',
        age: 10
    }
];



// my for loop
function findAverageDog(array){
    let dogCount =0, dogTotAge=0, result;
    for(let i=0; i<array.length; i++){
        if(array[i].type === 'Dog'){
            dogCount++;
            dogTotAge += array[i].age ;
        }
    }
    result = dogTotAge / dogCount;
    return result;
}

console.log( findAverageDog(pets));



// forEach
function findDog2(pets){
    let total = 0;
    let dogCount = 0;
    pets.forEach(function(pets5678){
        if(pets5678.type === 'Dog'){
            total += pets5678.age;
            dogCount++;
        }
    });
    return total / dogCount;
}
console.log(findDog2(pets));


// forEach arrow function
function findDog(pets){
    let total = 0;
    let dogCount = 0;
    pets.forEach((pets1234) =>{
        if(pets1234.type === 'Dog'){
            total += pets1234.age;
            dogCount++;
        }
    });
    return total / dogCount;
}
console.log(findDog(pets))


// my forEach
function findDog3(arrays){
    let dogCount =0, dogTotAge=0, result;
    arrays.forEach(function (item){
        if(item.type === 'Dog'){
            dogCount++;
            dogTotAge += item.age ;
        }
    });
    result = dogTotAge / dogCount;
    return result;
}

console.log(findDog3(pets));


//
// findAverageDogAge(pets) // returns 7.5


// Create a function, returnPetsWithNoFish, that takes in a array of pet objects and
// returns an array of pet objects with no pets of type 'Fish'.
//
const pets2 = [
    {
        name: 'Sparky',
        type: 'Fish',
        age: 4
    },
    {
        name: 'Mr. Pig',
        type: 'Cat',
        age: 4
    },
    {
        name: 'Bubba',
        type: 'Dog',
        age: 5
    },
    {
        name: 'Beans',
        type: 'Dog',
        age: 3
    },
    {
        name: 'Mr. Salmon',
        type: 'Fish',
        age: 1
    }
];
// my forEach
function returnPetsWithNoFish(array){
    let newArray= [];
    array.forEach(function(item){
        if(item.type !== 'Fish'){
            newArray.push(item);
            console.log(item);
        }
    });
    return newArray;
}

console.dir(returnPetsWithNoFish(pets2))

//arrow function
function returnPetsWithNoFish2(array){
    let newArray= [];
    array.forEach((item)=>{
        if(item.type !== 'Fish'){
            newArray.push(item);
            console.log(item);
        }
    });
    return newArray;
}

console.dir(returnPetsWithNoFish2(pets2))

//
// returnPetsWithNoFish(pets) // returns...
//
//     [
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//         {
//             name: 'Bubba',
//             type: 'Dog',
//             age: 5
//         },
//         {
//             name: 'Beans',
//             type: 'Dog',
//             age: 3
//         }
//     ]