
//TODO =================== Fetch Bonuses
//
// -- Ex. 1
//
//TODO: In your data directory, create a profiles.json file with the following...
//
// {
//     "sandy123": "brown",
//     "bob234": "green",
//     "sally345": "blue"
// }


//
//TODO: Add an input field and submit button (you will need to prevent the default behaviour) that when clicked, runs the following function...
// Create a function that takes in a username and fetch's the color preference based on the username and sets the background color to that color.

// var generateBtn = document.getElementById('generateSP');
// generateBtn.addEventListener('click', fetchData);
//
// function fetchData() {
//     fetch('https://random-words-api.herokuapp.com/w?n=10')
//         .then(function (response) {
//             if (response.status !== 200) {
//                 console.log(
//                     'Looks like there was a problem. Status Code: ' + response.status
//                 );
//                 return;
//             }
//             response.json().then(function (data) {
//                 console.log(data);
//                 document.getElementById('w3review').value = data;
//             });
//         })
//         .catch(function (err) {
//             console.log('Fetch Error :-S', err);
//         });
// }


$('#button').on('click', async function (e){
    e.preventDefault();
    //  fetch('https://api.github.com/users')
    // await Promise.all()
    fetch('./data/orders').then(data=>data.json())
    console.log('button clicked')
    // if($('#input').val() === "sandy123"){
    //     $('body').css({
    //         background: "brown"
    //     })
    // }else if($('#input').val() === "bob234"){
    //     $('body').css({
    //         background: "green"
    //     })
    // }else if($('#input').val() === "sally345"){
    //     $('body').css({
    //         background: "blue"
    //     })
    // }
})
//
// -- Ex. 2
//
//TODO: Using the Star Wars API, log the first film a Star Wars character's homeworld appeared in
//
//
//
// -- Ex. 3
//
//TODO: Using the GitHub API and reduce(), find the average hour of the last 3 pushes. Ignore minutes.
//
//
//
// -- Ex. 4
//
//TODO: Create star-chars.json file in your data folder and paste in the following...
//
// [
//     {
//         "name": "Rey",
//         "coolness": 9
//     },
//     {
//         "name": "Luke Skywalker",
//         "coolness": 9
//     },
//     {
//         "name": "Darth Vadar",
//         "coolness": 10
//     }
// ]
//
//TODO: Create a function that fetches this array and returns an array of homeworlds for the characters.
//     It will look something like the following...
//
// ['Jakku', 'Tatooine', 'Tatooine']
//
// Check out the curriculum on Promise.all() to work with multiple fetch requests at once.
