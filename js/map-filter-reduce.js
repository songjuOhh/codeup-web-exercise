const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const knowsThreeLang = users.filter(n => n.languages.length>=3);
console.log(knowsThreeLang)

const emails = users.map(n => n.email)
console.log(emails)

const avgExperience = users.reduce((totalYears, user)=>{
    return totalYears += user.yearsOfExperience/users.length;
},0);
console.log(avgExperience)

const longestEmail = users.reduce((longEmail, user)=>{
    // console.log( longEmail.length)
    // console.log( email2.length)

    // if(longEmail.email.length > email2.email.length){
    //     return longEmail
    // }else{
    //     return email2
    // }

    if(user.email.length > longEmail.length){
        longEmail = user.email;
    }
    return longEmail;
},'');
console.log(longestEmail)



let knowsTheMost = users.reduce((a,b)=> {
    // console.log(a.languages)
    // console.log(b.languages)
        return a.languages.length > b.languages.length ? a : b;
});
console.log( knowsTheMost)




// const allInstructors = [];
// const instructors = users.reduce((prev,current, i) =>{
//     allInstructors.push(`${current.name}`);
//     return `Your instructors are: ${allInstructors.join(', ')}.`;
// },'');
// console.log(instructors)

// const instructors = users.reduce((prev,current, i) =>{
//     if(i===0){
//         return `Your instructors are: ${prev} ${current.name},`
//     }else if(i=== users.length-1){
//         return `${prev} ${current.name}.`
//     }else{
//
//         return `${prev} ${current.name},`
//     }
// },'');


const instructors = users.reduce((prev,current, i) =>{
    if(i===0){
        return `Your instructors are: ${prev} ${current.name},`
    }else if(i=== users.length-1){
        return `${prev} ${current.name}.`
    }else{
        return `${prev} ${current.name},`
    }
},'');
console.log(instructors)


const instructors2  = users.reduce((str, user)=>{
    str += user.name+', ';
    return str;
},'Your instructors are: ').slice(0,-2)+'.';
console.log(instructors2);




const languages = users.reduce((array, current, i)=>{
    // console.log(current.languages)
    // console.log(current)
    for(let i =0; i<users.length; i++){
        if(array.includes(current.languages)){
            continue;
        }else {
            return `${current.languages},`
        }
    }

},[])
console.log(languages)










//
// const allLanguage = [], final=[];
// const languages = users.reduce((a, b, i) =>{
//     console.log(b.languages)
//     console.log(b.languages[1])
//
//     allLanguage.push(b.languages)
//     allLanguage.join(',')
//     console.log(allLanguage)
//
//     return noDuplicates(allLanguage)
//     // if(!a.includes(b.languages[i]))
//     //     a.push(b.languages[i]);
//     // return a;
//
//
//
//     // if(a.language[i]===b.languages[i])){
//     //     allLanguage.push('')
//     // }else{
//     //     allLanguage.push(b.languages[i])
//     // }
// },[]);
//
// console.log(languages)



// function noDuplicates(arrays) {
//     let arrayed = Array.prototype.slice.call(arguments);
//
//     // reduce is a method of an array, so call it as a method
//     // return reduce(arrayed, function(acc, cur) {
//     return arrayed.reduce(function(acc, cur) {
//
//         // Same with forEach
//         cur.forEach(function(item) {
//             if (acc[item] === undefined) {
//                 acc.push(item);
//             }
//             // Return acc from the reduce callback, forEach returns undefined always
//             // return acc;
//         });
//         return acc;
//     }, []);
// }




