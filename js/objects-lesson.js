/*
           JS Object


================================= OBJECTS READING QUESTIONS


1.  What is a JS object?
   - Grouping of data functionality
   - Data items in an object : properties
   - Functions in an object  : methods
   - use {}


2. What is the practical difference between these two statements?
  someObject.someProperty = 4;
  someObject[‘someProperty’] = 4;
    - using array notation to assign a 'someProperty' property.
    - should use top instead of bottom one


3. Are JS objects mutable?
    - Yes, except primitive(=built-in) values such as : immutable object;


4. Given the following code, what will be logged and why?
  var objA = {a: 1, b: 2};
  var objB = objA;
  objA.a = 7;
  console.log(objB.a);

    - it will return 7 because it reassigned 'objA.a' as value of 7 & objB = objA

5. Is it possible to nest another object inside of an object?
    - Yes.

6. Is it possible to nest an array in an object?
    - Yes. Since objects are also considered as data-types.

7. What does ‘this’ refer to within an object method in JS?
    - 'this' refers to the object
    - 'this' is not a variable, but keyword: You cannot change the value of 'this'

    // In an object method, this refers to          : the object.
    // Alone, this refers to                        : the global object.
    // In a function, this refers to                : the global object.
    // In a function, in strict mode, this is       : undefined.
    // In an event, this refers to the element that received the event.
    // Methods like call(), apply(), and bind() can refer this to any object.
 */


var objA = {a: 1, b: 2};
var objB = objA;
objA.a = 7;
console.log(objB.a);

// const username;
// const password;
// const isAdmin;
//
// //to
//
// const user = {
//     username:
//     password:
//     isAdmin:
// }


/*
   =====================     JS Objects     =======================

    - like a named index array
    - used to store related state and behavior
    - where arrays are good for storing lists of data, objects store related aspects of a greater structure
    - we have already used objects: String, Array, Math, Number

    - allows us to group together state (values) and behavior (function, etc).

        const username;
        const password;
        const isAdmin;

     to

        const user = {
           username:
           password:
           isAdmin:
        }
*/


// ========== Creating Objects (dog, user, forecast, dictionaryEntry, movie, post, etc.)

// New Object Instance

const dog = new Object();   // [Older way] creating object
console.log(typeof dog);


// Object Literal Notation

// const cat = {};             // [Simple way] creating object
const cat = {
    name: 'Garfield',
    age: 7
};
console.log(typeof cat);
console.log(cat);
console.log(cat.name);
console.log(cat.age);

cat.color = 'orange';
// cat.color = prompt("What is the color of your cat?");
cat.age = 8;
console.log(cat);

console.log(cat.age);     // 8
console.log(cat['age']);  // 8



// ========== Accessing Properties on an Object

// console.log(pet.givenName);
// console.log(pet2.givenName);
// console.log(pet2['givenName']);
//
// pet.givenName = "Sabrina";

// console.log(pet.givenName);






// ========== Setting Properties on an Object

// const pet = {};

// pet.givenName = 'Sparkles';
// pet.age = 12;
// pet.species = 'turtle';
// pet.hasOffspring = true;
// pet['value-in-dollars'] = 400; // alternative syntax for assigning properties

// ========== Peeking into an Object (can result in inaccurate property values if your script mutates an array/object)

// console.log(pet);




// !! MINI-EXERCISE 1 !!

//Create a few beverage objects and assign values to each object for the following properties:
//   - brandName
//   - type
//   - volumeInLiters
//   - priceInCents
//   - expirationDate
//   - datesOfPreviousSips (use an array of strings)
//   - isOpen

const beverage ={
    brandName: 'Coke',
    type: 'Zero',
    volumeInLiters: 1.5,
    priceInCents: 2.00,
    expirationDate: ['12/30/23'],
    datesOfPreviousSips: ['12/5/22'],
    isOpen: false

}
console.log(beverage);

const beverage2 ={};

beverage2.brandName='Sprite';
beverage2.type='Diet';
beverage2.volumeInLiters=1.5;
beverage2.priceInCents=2.00;
beverage2.expirationDate= ['12/30/23'];
beverage2.expirationDate= ['12/5/22'];
beverage2.isOpen= false;

console.log(beverage2);
console.log(beverage2['type']);

console.log( beverage.datesOfPreviousSips=[new Date() ]);  // used Date function




// Define your objects using both literal syntax to create all properties and values at once
// and also try defining empty objects and assign property values in separate statements
// using the dot notation.




// Nested Values :

const pet = {
    name: 'Bowser',
    age: 6,
    species: 'Pug',
    hasOffspring: false,
    valueInDollars: 'priceless',
    altNames: [
        'Bowser Boy',
        'Mr Bowser',
        'Bowser Buddy',
        'Puggle Wuggle Boy'
    ],            //object inside object
    vitals: [{    //You can add [] to add index
        averageTempDegF: 101,
        averageRestingHeartRate: 80,
        isHungry: true
    },{
        averageTempDegF: 103,
        averageRestingHeartRate: 85,
        isHungry: false
    }]
};

console.log(pet);
console.log(`is ${pet.name} hungry? ${pet.vitals.isHungry}.`);
pet.vitals.date = '2022-12-03';
console.log(pet.vitals);

console.log( pet.vitals[1].averageRestingHeartRate);   //Use index# to pick which group you want

// log and change various property values on the pet object




// ========== Working with Arrays of Objects

const pets = [
    {
        givenName: 'Spot',
        isDog: true,
        toys: ['scratch', 'bubbles']
    },
    {
        givenName: 'Max',
        isDog: false,
        toys: ['bones', 'laser']

    },
    {
        givenName: 'Goldy',
        isDog: false,
        toys: ['algae', 'bell']

    }
];
console.log("---- using console.log");
console.log(pets[0].givenName);
console.log(pets[1].givenName);
console.log(pets[2].givenName);
// what would be the best to perform above w/ out repeating same log?
console.log("---- using for loop");
for (let i =0; i<pets.length; i++){
    console.log(pets[i].givenName);
}

console.log("---- using forEach loop");
pets.forEach(function(pet){
    console.log(pet.givenName);
});

for (let i =0; i<pets.length; i++){
    pets[i].givenName= 'Smith';
}
console.log(pets.givenName)
pets.forEach(function(pet){
   pets.givenName= 'Smith'
});
console.log(pets.givenName= 'Alex');


// change every pet's name to 'Bowser' (manually, forEach, for loops)



// ========== Additional Example Working with Arrays of Objects

// create a pet object that has the following properties...
// givenName
// ageInYears
// species

// const pet1 = {
//     givenName: 'Freckles',
//     ageInYears: 4,
//     species: 'Dog'
// };
//
// const pet2 = {
//     givenName: 'Spot',
//     ageInYears: 2,
//     species: 'Fish'
// };
//
// const pet3 = {
//     givenName: 'Dog',
//     ageInYears: 10,
//     species: 'Cat'
// }
// const pets = [pet1, pet2, pet3];



// !! MINI EXERCISE 2 !!
const users = [
    {
        givenName: 'Sam',
        age: 21
    },
    {
        givenName: 'Cathy',
        age: 34
    },
    {
        givenName: 'Karen',
        age: 43
    }
];
//
// 1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"
let names =[], stringName;
users.forEach(function(name){
    names.push(name.givenName);
    console.log(names);
    stringName= names.join(" ");
    console.log(stringName);
})
// 2. Change the names of all users to "John Doe"
users.forEach(function(name){
    name.givenName = "John Doe"
    console.log(name.givenName);
});

//
// 3. Increase the current age of all users by 1
//
console.log(users[2].age);
users.forEach(function(age){
    age.age += 1;
    console.log(age.age);
})
// Can you accomplish each step using iteration?



// Extras...
// log the total of all the ages
let totAge =0;
users.forEach(function(age){
    totAge += age.age;
    console.log(totAge);
});
// log the average age of all users
let avgAge = 0;
avgAge = totAge/users.length;
console.log(avgAge);

// log all the user information in the following format...

users.forEach(function (input){
    console.log(`user: ${input.givenName} | age: ${input.age}`);
})

/*
    user: Sam | age: 21
    user: Cathy | age: 34
    user: Karen | age: 43
 */

const users2 =[{
    userName: 'Sam',
    age: 21,
}, {
    userName: 'Cathy',
    age: 34,
},{
    userName: 'Catherine',
    age: 43
}];
// console.log(users2[0].userName);

// log the longest username of all of users
let longestName='', compare;
// console.log(users2);
console.log(users2[2-1].userName.length);
console.log(users2.length);

for (let i=0; i<users2.length; i++) {
    if (users2[i].userName.length > longestName.length) {
        longestName = users2[i].userName;
        console.log(longestName);
    } else {
        console.log(longestName);
    }
}
console.log(longestName);

    // console.log(users2[i].userName);
    // compare = users2[i].userName.length > users2[i+1].userName.length
    //     ? users2[i].userName : users2[i+1].userName;
    // result = compare;

    // console.log(users2[i].userName.length);





// ========== Getting a List of Object Keys as an Array

const pet1 = {
    givenName: 'Freckles',
    ageInYears: 4,
    species: 'Dog'
};

console.log(Object.keys(pet1));





// ========== Assigning Functionality to an Object

// const dog1 = {
//     petName: 'Sparky',
//     age: 4,
//     bark: function() {
//         console.log("Woof woof!");
//     },
//     eat: function(food) {
//         console.log('Dog is eating...' + food);
//     },
//     agePet: function() {
//         this.age += 1;
//     }
// }
//
// const dog2 = {
//     petName: 'Rex',
//     age: 2,
//     bark: function() {
//         console.log("Woof woof!");
//     },
//     eat: function(food) {
//         console.log('Dog is eating...' + food);
//     },
//     agePet: function() {
//         this.age += 1;
//     }
// }
//
// const dog3 = {
//     petName: 'Dino',
//     age: 10,
//     bark: function() {
//         console.log("Woof woof!");
//     },
//     eat: function(food) {
//         console.log('Dog is eating...' + food);
//     },
//     agePet: function() {
//         this.age += 1;
//     }
// }
//
// const dogs = [dog1, dog2, dog3];
//
// console.log(dogs[0].age);
// console.log(dogs[1].age);
// console.log(dogs[2].age);
//
// dogs.forEach(function(dog) {
//     dog.agePet();
// });
//
// console.log(dogs[0].age);
// console.log(dogs[1].age);
// console.log(dogs[2].age);


// console.log(dog.age);
// dog.agePet();
// console.log(dog.age);

// dog.bark();
// dog.eat('steak');
// dog.eat('a bone');
// dog.eat();
//
// dog.sayHello = function() {
//     console.log('Wagging tail and barking lightly.');
// }
//
// dog.sayHello();




// const user = {
//     givenName: 'Justin',
//     age: 25,
//     sayHello: function(input) {
//         console.log(input);
//     },
//     logAge: function() {
//         console.log(this.age);
//     },
//     getYounger: function() {
//         this.age = this.age - 1;
//     },
//     setAge: function(age) {
//         this.age = age;
//     }
//     // addProp: function(name, value) {
//     //     this.name = value;
//     // }
// }

// console.log(user);

// user.sayHello('Hello, Go!');
// user.logAge();
// user.getYounger();
// user.logAge();
// user.setAge(100);
// user.logAge();
// user.getYounger();
// user.logAge();


// console.log(user);




// ========== The this Keyword

// const pet6 = {
//     name: "Sparky",
//     age: 3,
//     getOlder: function() {
//         console.log(this.age);
//         this.age += 1;
//     }
// };
//
// console.log(pet6.age);
// pet6.getOlder();
// console.log(pet6.age);