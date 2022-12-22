// Implémente une fonction `uniq` qui prend en entrée une séquence et renvoie une séquence dans laquelle tous les éléments 
// dupliqués se succédant ont été réduits à une seule instance.

// Example:
// * ['a','a','b','b','c','a','b','c'] --> ['a','b','c','a','b','c']

// balayer tout le tableau de 0 à length
// if i + 1 est égale à i
//alors tu supprimes i   
// || alors tu crées un nouveau tableau avec les nouvelles idées

console.log("start");
console.log("-------------------------------------------------");

const uniq = (arr) => {
for (let i = 0; i<arr.length; i++){
    if (arr[i] === arr[i+1]){
        arr.splice(i,1)
        i --
    }
}
return arr
}
 // ------------------------------------------------------------------------
// const uniq = (arr) => {
//     let newArr = []
//     for(let i = 0; i<arr.length; i++){
//         if (arr[i] !== arr[i+1]){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
 // ------------------------------------------------------------------------


console.log(uniq(['a','a','a','b','b','c','a','b','c','a','a','a','b','b','c','a','b','c'])); 


console.log("-------------------------------------------------");
console.log("end");
