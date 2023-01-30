export function evenOrOdd (n){
    return (n%2 === 0)? 'even' : 'odd';
}

export const helloWorld3 = (name = "Songju") => {
    console.log(`Hello, ${name}`);
}