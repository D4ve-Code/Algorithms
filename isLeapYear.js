 
// Tu dois écrire une fonction permettant de déterminer si une année est bissextile.
// Elle renverra true si l'année passée en paramêtre est bissextile et false si ce n'est pas le cas.
// Pour rappel, une année est bissextile:
//  - si elle est divisible par 4 sans être divisible par 100,
//  ou
//  - si elle est divisible par 400.
// Les années 2004, 2016 et 2020 sont bissextiles.
// Autre rappel: Tu dois utiliser l'opérateur modulo (%) pour vérifier si un nombre est divisible par un autre.


// function isLeapYear(year) {
//     TODO: Your code here
// } 



const isLeapYear = year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? true : false;
console.log(isLeapYear(2004))

// // -----------------------------

// const year = 2004;

// const isLeapYear = year => {
//     if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//         return true;
//     } else {
//         return false
//     }
// }
// console.log(isLeapYear(year));

// // -----------------------------

// function isLeapYear(year) {
//     const years = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
//     return years
// }
// console.log(isLeapYear(2004));

// // -----------------------------

// const isLeapYear = year => {
//     if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//         return true;
//     } else {
//         return false
//     }
// }
// console.log(isLeapYear(2001));