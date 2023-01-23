// Crée une fonction qui renvoie la longueur du ou des mots les plus courts.

// La chaîne ne sera jamais vide et vous n'avez pas besoin de tenir compte des différents types de données.

// exemple : 
// findShort("Prachett is the best author in the world ") // 2


/* Je balaye l'ensemble de la sentence, je trouve la range? la plus petite et je la retourne dans un résultat

1. je transforme la phrase en tableau déléments
2. j'ai fait un for pour balayer les élements (ou .map)
3. filter ?
4. je renvoie l'élement en string 
*/

console.log("start");
console.log("-------------------------------------------------");

const findShort = (sentence) => {
    const tableau = sentence.split(' ')
    const result = []
    for (let i = 0; i < tableau.length; i++){
        result.push(tableau[i].length)
    }
    return (Math.min(...result))
}
console.log(findShort("Prachett is the best author in the world")); 


console.log("-------------------------------------------------");
console.log("end");
