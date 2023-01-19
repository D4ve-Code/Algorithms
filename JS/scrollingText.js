 // Créer une fonction qui prend une chaîne et renvoie un tableau avec toutes rotations possibles de la chaîne en majuscules.
//exemple : scrollingText("lapin") ➞ ["LAPIN", "APINL", "PINLA", "INLAP", "NLAPI", "LAPIN"]

// on a une string et faut renvoyer un tableau (avec random text)
// on split la string
// on boucle for pour balayer les éléments
// on selectionne le [0] shift + Push

console.log("start");
console.log("-------------------------------------------------");

const scrollingText = (text) => {
    const rotations = [];
    text = text.toUpperCase();
    for (let i = 0; i < text.length; i++) {
        rotations.push(text.slice(i) + text.slice(0, i));
    }
    return rotations;
}
console.log(scrollingText("lapin")); 

console.log("-------------------------------------------------");
console.log("end");
