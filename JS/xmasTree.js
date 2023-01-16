// Créez une fonction qui renvoie un arbre de Noël de la bonne hauteur. L'arbre de Noël doit être représenté sous 
// forme de chaîne.
// La hauteur transmise est toujours un entier compris entre 0 et 100.

// Utilisez \n
// pour les retours à la ligne entre chaque ligne.

// exemple :
//          *    
//         ***   
//        *****  
//       ******* 
//      *********



console.log("start");
console.log("-------------------------------------------------");


function christmasTree(height) {
    let texte = ""
    for (let i = 1 ; i <= height; i++) {
    texte += " ".repeat(height-i) + "*".repeat(i*2 - 1) + "\n"    
    }
    return texte
}
console.log(christmasTree(5));


console.log("-------------------------------------------------");
console.log("end");
