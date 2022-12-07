(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person = {
        firstName : "Rick",
        lastName : "Sanchez"
    };
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello= function (){
        return `Hello from ${person.firstName} ${person.lastName}!`
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.discount = function(){

        let newPrice;
        for (let i=0; i< this.length; i++){

            if(this[i].amount > 200){
                newPrice = this[i].amount - (this[i].amount * .12);
                console.log(`Hello, ${this[i].name}!`)
                console.log(`You spent more then $200! So you will get %12 discount!`);
                console.log(`Your discount amount is ${this[i].amount*.12}`)
                console.log(`Your total amount will be:`)
                console.log(newPrice);
                console.log("");
            }else{
                newPrice = this[i].amount;
                console.log(`Hello, ${this[i].name}!`)
                console.log(`You did not spend more than $200.`);
                console.log(`Your total amount will be:`)
                console.log(newPrice);
                console.log("");
            }
        }
    };

    shoppers.discount();





    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    const books = [{
        title: "The Salmon of Doubt",
        author: {
            firstName: "Douglas",
            lastName: "Adams"
        }},{
        title: "Don Quixote",
        author: {
            firstName: "Miguel",
            lastName: "Cervantes"
        }},{
        title: "Lord of the Rings",
        author: {
            firstName: "J.R.R",
            lastName: "Tolkien"
        }},{
        title: "Harry Potter",
        author: {
            firstName: "J.K.",
            lastName: "Rowling"
        }},{
        title: "And Then There Were None",
        author: {
            firstName: "Agatha",
            lastName: "Christie"
        }
    }];

    books.push({title: "Dont give up", author:{firstName : "Songju", lastName: "Oh" }});


    console.log(books[3].title);
    console.log(books[3].author.firstName);
    console.log(books[3].author.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.showAll = function(){
        for(let i=1; i<books.length; i++){
            console.log("");
            console.log(`Book #${i}`);
            console.log(`Title: ${this[i].title}`);
            console.log(`Author: ${this[i].author.firstName} ${this[i].author.lastName}`);
            console.log("---");
        }
    }
    books.showAll();

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function sepName (name){            // Turns(split) input into Array
        let fullName = [], result;      // so I can separate first and last name.
        fullName += name;
        result= fullName.split(' ');
        console.log(result);
        return result;
    }
    // console.log(sepName("Songju Oh"));   // testing if sepName works

     books.createBook =function (title, authorName) {
         authorName = sepName(authorName);   // turn input:authorName into 2 array element
         this.push({
             title: title, author:    // for firstName & lastName
                 {firstName: authorName[0], lastName: authorName[1]}
         });
     }
         /** You can use array functions such as:
               someArray.push()    = adds new last element
               someArray.pop()     = removes last element
               someArray.unshift() = adds new first element
               someArray.shift()   = removes first element
                  *** for objects inside array ***
          */
         // this.author.firstName.push (authorName[0]);
         // this.author.lastName.push(authorName[1]);

    books.createBook("You are not alone", "Andy Oh"); //put book & title
    console.log(books);

    console.log(books[1].author);

    function returnSpace (input){
        let string = input.toString(), symbol = '';
        for(let i=0; i<string.length+7; i++){
            symbol += '_';
        }
        return symbol;
    }
    // returnSpace("songju");

    books.showBookInfo= function (book){

        let bookCount=0, title, space;
        for (let i=0; i<books.length; i++){
            if(this[i].title.includes( book) ||
                this[i].author.firstName.includes(book) ||
                this[i].author.lastName.includes(book)){
                title = this[i].title;
                // console.log(this[i].title);
                space = returnSpace(title);   //adding space
                bookCount ++;  //count results
                console.log(
                    `
          ${space}      
             
          title: ${this[i].title} 
          author: ${this[i].author.firstName} ${this[i].author.lastName}
          ${space}   
             `);
            }
        }
        console.log(`I found ${bookCount} book(s).`)};

    books.showBookInfo('a');
})();


