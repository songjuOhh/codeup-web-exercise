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
    console.log("======== Exercsie 1 ========\n ");
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
    console.log("\n======== Exercsie 2 ========\n ");
    person.sayHello= function (){
        return `Hello from ${person.firstName} ${person.lastName}!`
    }
    console.log(person.sayHello());

    person.middleName = 'Junior';
    console.log(person);

    // let arr = ['Songju', 'Oh', 4,3, {firstName: 'Andrew', lastName: 'OHHH'}];

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

    console.log("\n======== Exercsie 3 ========\n ");

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    console.log("-----forEach------");

    //Turning input to dollar rate amount with $sign and format (ex) $100.00
    function toDollar (number){
        let newNum = parseFloat(number);
        newNum = newNum.toLocaleString('en-US',{style: 'currency', currency: 'USD'});
        return newNum;
    }

    shoppers.forEach(function(shopper){
        if(shopper.amount > 200){
            let savings = shopper.amount *.12
            let total = parseFloat( shopper.amount )- savings; //do not have to use parseFloat, but it does not hurt for making sure
            console.log(`${shopper.name} has a bill of ${toDollar( shopper.amount)}, and received a 12% discount.\n${shopper.name}'s discounted total is ${toDollar( total)}, with a savings of ${toDollar( savings)}.`);

        }else{
            let remaining = (200 - parseFloat(shopper.amount)).toLocaleString('en-US',{style: 'currency', currency: 'USD'});
            console.log(`${shopper.name} has a bill of $${toDollar( shopper.amount)}, and did not receive any discount.\n${shopper.name}'s total is ${toDollar( shopper.amount)}.`);
        }
    });


    console.log("-----for loop------");
    shoppers.discount = function(){

        let newPrice;
        for (let i=0; i< this.length; i++){

            if(this[i].amount > 200){
                newPrice = this[i].amount - (this[i].amount * .12);
                console.log(`Hello, ${this[i].name}!`)
                console.log(`You spent more then $200! So you will get %12 discount!`);
                console.log(`Your discount amount is $${this[i].amount*.12}`)
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
    let multiArr = [["orange","banana","tomato"],["Yeah"],["Woof"]];
    console.log(multiArr[0][2]);  //
    // [0]: indicates 1st grp of array /
    // [2]: indicates 2nd index of array[0]
    // It will return 'tomato'

    console.log("\n======== Exercsie 4 ========\n ");

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
    console.log("\n======== Exercsie 5 ========\n ");

    console.log("------ for loop -------");
    books.showAll = function(){
        for(let i=1; i<books.length; i++){
            console.log(`Book #${i}`);
            console.log(`Title: ${this[i].title}`);
            console.log(`Author: ${this[i].author.firstName} ${this[i].author.lastName}`);
            console.log("---");
        }
    }
    books.showAll();

    console.log("------ forEach -------");
    let oneConsoleLogToRuleThemAll = '';  // if you assign it inside forEach, it will reset the assignment through the loop

    books.forEach(function(book, index){
        /*** function(book, ) = this is connected to books array-object, so will use assigned variable: book, instead of books
         *** function( ,index) = this will work as 'i' in for loop, and the value will start from 0
         */
        let bookNumber = index + 1;
        let fullName = `${book.author.firstName} ${book.author.lastName}`
        let message = `Book # ${bookNumber}\nTitle: ${book.title}\nName: ${fullName}\n---\n`
        console.log(message);

        console.log(`#Putting into one console log \n`); //for fun
        oneConsoleLogToRuleThemAll+= message;
        console.log(oneConsoleLogToRuleThemAll);
    })

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


    console.log("\n======== Exercsie 6 ========\n ");

    function sepName (name){            // Turns(split) input into Array
        let fullName = [], result;      // so I can separate first and last name.
        fullName += name;
        result= fullName.split(' ');
        console.log(result);
        return result;
    }

    console.log(sepName("Sognju OHHH").join(""));



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

    const books2 = [];

    books2.createBook2 =function (title, author){
        let splitName = author.split(' ');
        let bookObject =
            {
            title: title,
            author: {
                firstName: splitName[0],
                lastName: splitName[1]
            }
        };
        books2.push( bookObject);
    }
    books2.createBook2("Man's not hot", "Big ShaQ");
    books2.createBook2("Girl is hot", "Big ShaQQQQQ");

    console.log(books2);


    // //created an independent function
    // function createBook2 (title, author){
    //     let splitName = author.split(' ');
    //     let bookObject ={
    //         title: title,
    //         author: {
    //             firstName: splitName[0],
    //             lastName: splitName[1]
    //         }
    //     };
    //     return bookObject;
    // }
    // createBook2("Man's not hot", "Big ShaQ");

    ////console.log(books2);
    //     function showBookInfo(book, index) {
    //         let bookNumber = index + 1;
    //         let fullName = `${book.author.firstName} ${book.author.lastName}`;
    //         let message = `Book # ${bookNumber}\nTitle: ${book.title}\nAuthor: ${fullName}\n---\n`;
    //         console.log(message);
    //     }
    //     books2.forEach(function(book, index){
    //        showBookInfo(book, index);
    //     });




    function returnSpace (input){
        let string = input.toString(), symbol = '';
        for(let i=0; i<string.length+7; i++){
            symbol += '_';
        }
        return symbol;
    }



    // returnSpace("songju");

    books.showBookInfo= function (book){

        let bookCount=0, title, space, lowered;
        for (let i=0; i<books.length; i++){
            lowered = book.toLowerCase();
            if(this[i].title.toLowerCase().includes( lowered) ||
                this[i].author.firstName.toLowerCase().includes(lowered) ||
                this[i].author.lastName.toLowerCase().includes(lowered)){
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

    books.createBook("Charlotte's Web","E.B. White");
    books.showBookInfo('white');

})();


