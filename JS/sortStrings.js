 //Écrivez une fonction qui prend un tableau de chaînes et renvoie un tableau de chaînes triées par ordre alphabétique.

 

console.log("start");
console.log("-------------------------------------------------");


// const sortStrings = (arr) => {
//     return arr.sort()
// }
// console.log(sortStrings(["b", "a", "c", "A", "B"]));

// let arr = [1, 4, 13, 8, 16];

// const sortStrings = (arr) => {
//     return arr.sort((a, b) => {
//         return a - b;
//     });
// }

const sortStrings = (arr) => arr.sort((a, b) => {
        return a - b;
    });

console.log(sortStrings(arr));

console.log("-------------------------------------------------");
console.log("end");
