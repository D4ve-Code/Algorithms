 /*
Créez une fonction `abbreviate` qui convertit un nom en initiales.

La sortie doit être en majuscules avec un point les séparant.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

*/

console.log("start");
console.log("-------------------------------------------------");

const abbreviate = (str) => { 
   const str1=str.split(" ")
   const str2=str1.map(elem => elem.substring(0,1))
   const str3=str2.join(".")
return str3
}

console.log(abbreviate("Neil Patrick Harris")); 

console.log("-------------------------------------------------");
console.log("end");
