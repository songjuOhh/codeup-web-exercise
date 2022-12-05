(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
    //Mutation
    console.log(planets);
    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    console.log(planets);

    //Mutation
    console.log(planets);
    planets.push("Pluto");
    console.log('Adding "Pluto" to the end of the planets array.');

    console.log(planets);

    //Mutation
    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    console.log(planets);

    //Mutation
    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();
    console.log(planets);


    /* If you want to remove element from the array, you can try 'splice'

     -  The splice() method changes the contents of an array by removing or replacing
        existing elements and/or adding new elements in place

        splice(start)
        splice(start, deleteCount)
        splice(start, deleteCount, item1)
        splice(start, deleteCount, item1, item2, itemN)

     */




    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf("Earth"));

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);
})();