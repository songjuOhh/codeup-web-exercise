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

// function findDog(arrays){
//     let dogCount =0, dogTotAge=0, result, dogs=[];
//     pets.forEach(function (element, i, array){
//         if(array[i] === 'Dog'){
//             dogCount++;
//             console.log(dogCount)
//             dogTotAge += array[i].age ;
//             console.log(dogTotAge);
//         }
//     });
//     result = dogTotAge / dogCount;
//     return result;
// }
//
// console.log(findDog(pets));





//
// findAverageDogAge(pets) // returns 7.5