//Ecrivez une fonction qui Supprime les doublons
//Exemple : removeDuplicates([1,2,2,3,3,4,4, 5, 5, 6, 7, 7, 8, 9, 9, 10]) = [1,2,3,4,5,6,7,8,9,10]

console.log("start")
console.log("-------------------------------------------------")

const removeDuplicates = (arr) => {
  const unique = []
  arr.forEach((arr) => {
    if (!unique.includes(arr)) {
      unique.push(arr)
    }
  })
  return unique
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10]))

console.log("-------------------------------------------------")
console.log("end")

// const removeDuplicates = (arr) => {
//     return [...new Set(arr)]
//   }
