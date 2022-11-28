function showMultiplicationTable (number){
    for (var i = 1; i<11; i++){
        let multipled = number * i;
        let showM = number + " x "+ i + " = " + multipled;
        console.log( showM);
    }
}
showMultiplicationTable(7);


// for (var i = 0, j = 9; i < 10; i++, j--) {
//     console.log('for loop iteration #' + i + ', j = ' + j);
// }

