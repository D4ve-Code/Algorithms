 // Créez une fonction appelée raccourci pour supprimer les voyelles minuscules (a, e, i, o, u ) dans une chaîne donnée.

// exemple :
// // "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"


console.log("start");
console.log("-------------------------------------------------");

const shortcut = (string) => {
    const first = string.split('');
    const second = first.filter((elem) => elem != 'a' && elem != 'e' && elem !='i' && elem != 'o' && elem != 'u')
    const result = second.join('');
    return result
}
console.log(shortcut("hello")); 

console.log("-------------------------------------------------");
console.log("end");
