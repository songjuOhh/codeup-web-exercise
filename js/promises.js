//with async
(async ()=>{
    async function getUsersDateAsync (userName){
        try{
            let response = await fetch(`https://api.github.com/users/${userName}/events`,{headers: {'Authorization':`token ${keys.github}`}})
                // .then(response=>response.json()); //wait until it fetches
            let data = await response.json()
                // console.log(`Data is done inside of getUsersAsync =>`, data);
            return data[0].created_at.slice(0,10);   //can filter out the data, such as .map .reduce or such
        } catch (error){
        }
    }
    let getUserName = await getUsersDateAsync('songjuOhh')
    console.log(getUserName)
})();


//without async
function getUsersDateAsync2 (userName){
     return fetch(`https://api.github.com/users/${userName}/events`,{headers: {'Authorization':`token ${keys.github}`}})
         .then(response => {return response.json()})
             .then((data)=> {return data[0].created_at.slice(0, 10)})
             .catch(error=> console.error(error));
}
getUsersDateAsync2('songjuOhh').then(console.log)




function wait(input) {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (input>=1000 ){
                    resolve (`You will see this message after ${input/1000} second(s)`)
                }else{
                    reject('Your number is lower than 1000.')
                }
            },input);
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


wait(5000)
    .then(message => console.log ('Promise resolved!', message))
    .catch(message=> console.log('Promise rejected!', message));





