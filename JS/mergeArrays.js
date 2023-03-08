//Fusionner deux tableaux triés en un seul tableau trié :
// Exemple : mergeArrays([1,2,3,4,5], [6,7,8,9,10]) = [1,2,3,4,5,6,7,8,9,10]

console.log("start")
console.log("-------------------------------------------------")

const mergeArrays = (arr1, arr2) => {
  return arr1.concat(arr2).sort((a, b) => a - b)
}
console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]))

console.log("-------------------------------------------------")
console.log("end")

// const mergeArrays = (a,b) => [...a,...b].sort((a,b) => a-b);
