/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know

// const name = 'songju';
// const email = 'songju.oh1@gmail.com';
// const languages = ['html', 'css', 'javascript', 'java'];

// TODO: replace the `var` keyword with `const`, then try to reassign a variable
const name = 'songju';
const email = 'songju.oh1@gmail.com';
const languages = ['html', 'css', 'javascript', 'java'];

// TODO: rewrite the object literal using object property shorthand
const songju ={
  name,
  email,
  languages
};

users.push(songju);
console.log(users)

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });

users.forEach((email) => emails.push(email));

// users.forEach(function(user) {
//   return names.push(user.name);
// });

users.forEach(name => names.push(name));


// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also  use destructuring assignment in the function
  //       parameter definition
  const users = {name:`<span class="fw-bold text-primary">${capitalizeFullName(user.name)}</span>`, email:`<span class="text-secondary "><a href="#" class="text-reset"> ${user.email}</a></span>`, languages:user.languages}
  const {name, email, languages} = users;



  // TODO: rewrite the assignment below to use template strings
  developers.push(`<div>${name}'s email is ${email}. ${name} knows <span class="text-info">${languages.join(', ')}</span>.</div> `);
});

// TODO: Use `let` for the following variable
let list = '<ul class="developer-list list-group-flush">';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {

for(let developer of developers){

  // TODO: rewrite the assignment below to use template strings
  list += `<li class="list-group-item"> ${developer}  </li>`;
}
list += `</ul>`;

console.log(developers)


$('.developer-list').html(list)



function capitalizeFullName(input){
  const capitalized =input.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
  return capitalized;
}

function capitalizeFirstName(name){
  return name.charAt(0).toUpperCase() + name.slice(1);
}