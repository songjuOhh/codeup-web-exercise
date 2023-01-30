


// const myPromise = fetch('https://api.github.com/users');
// myPromise.then(response => console.log(response));
// myPromise.catch(error => console.error(error));


console.log('This happened first')
function getUser(){
    fetch('https://api.github.com/users')
        .then(response =>{
            return response.text();
        })
        .then(data =>{
            console.log('The fetch is complete')
            // console.log(data)
            return data;
        })
        .catch(error =>{
            alert(error);
        });
}
console.log('This happened after the fetch')


async function getUsersAsync (){
    try{
        let response = await fetch('https://api.github.com/users'); //wait until it fetches
        let data = await response.json();  //wait until it gets the response from json
        console.log(`Data is done inside of getUsersAsync =>`, data);
        return data;   //can filter out the data, such as .map .reduce or such
    } catch (error){

    }
}

//IIFE arrow function
(async ()=>{
    try{
        // let users = getUsersAsync(); // it will show Promise since it did not wait until getUserAsync() to finish its job
        let users = await getUsersAsync(); // it will show the data since the data from getUserAsync() is already loaded

        console.log(`This is the users variables inside the IIFE =>`, users)
        // let repos = await getRepos();
    }catch (error){
        console.log(error)
    }
})();


fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach( userObj => {
            // do something with each username
            // console.log(userObj.login);
        })
    })
    .catch(error => console.error(error));





//
// const githubPromise = fetch('https://api.github.com/repositories');
// const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');
//
// Promise.all([githubPromise, bitbucketPromise])
//     .then(function(data) {
//         // here data is an array of the resolved values from each promise
//         // we can now do something with both pieces of data
//
//     })
//     .catch(function(error) {
//         // handle errors
//     });
