// Votre objectif est de créer une fonction qui supprime les premier et dernier caractères d'une chaîne. Vous avez un paramètre, 
// la chaîne d'origine. Vous n'avez pas à vous soucier des chaînes de moins de deux caractères.





console.log("start");
console.log("-------------------------------------------------");

function removeChar(str){
    // const removeChar = str.substring(1, str.length -1);
    const removeChar = str.slice(1, -1)
    return removeChar
};

console.log(removeChar('chicken'));

console.log("-------------------------------------------------");
console.log("end");
