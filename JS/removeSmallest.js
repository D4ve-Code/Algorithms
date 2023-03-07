// Créer une fonction qui enleve le nombre le plus petit de la liste et renvoie la liste restante.
// Exemple : removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// Exemple : removeSmallest([5,3,2,1,4]) = [5,3,2,4]


console.log("start");
console.log("-------------------------------------------------");

// const removeSmallest = (numbers) => {
//     const array1 = numbers.filter((elem) => elem!= Math.min(...numbers));
//     return array1
//     }


const removeSmallest = (numbers) => {
    numbers.splice(numbers.indexOf(Math.min(...numbers)),1);
    return numbers;
    }
    console.log(removeSmallest([5,3,2,1,4]));

console.log("-------------------------------------------------");
console.log("end");
