// Créez une fonction, aussi courte que possible, qui renvoie ces paroles.
// Votre code doit comporter moins de 300 caractères. Attention aux trois points à la fin de la chanson.

// Baby shark, doo doo doo doo doo doo
// Baby shark, doo doo doo doo doo doo
// Baby shark, doo doo doo doo doo doo
// Baby shark!
// Mommy shark, doo doo doo doo doo doo
// Mommy shark, doo doo doo doo doo doo
// Mommy shark, doo doo doo doo doo doo
// Mommy shark!
// Daddy shark, doo doo doo doo doo doo
// Daddy shark, doo doo doo doo doo doo
// Daddy shark, doo doo doo doo doo doo
// Daddy shark!
// Grandma shark, doo doo doo doo doo doo
// Grandma shark, doo doo doo doo doo doo
// Grandma shark, doo doo doo doo doo doo
// Grandma shark!
// Grandpa shark, doo doo doo doo doo doo
// Grandpa shark, doo doo doo doo doo doo
// Grandpa shark, doo doo doo doo doo doo
// Grandpa shark!
// Let's go hunt, doo doo doo doo doo doo
// Let's go hunt, doo doo doo doo doo doo
// Let's go hunt, doo doo doo doo doo doo
// Let's go hunt!
// Run away,…

// Bonne chance baby shark ;) !




console.log("start");
console.log("-------------------------------------------------");


function babySharkLyrics(){
    let l = ["Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", "Grandpa shark", "Let's go hunt"]
    return result = l.map(e => `${e},${" doo".repeat(6)+"\n"}`.repeat(3)+`${e}!"\n"`).join("")+"Run away, ..."
}

console.log(babySharkLyrics()); 

console.log("-------------------------------------------------");
console.log("end");

// result = ((l1 + ', ' + l7.repeat(6)+ " " + "\n").repeat(3))+ (l1 + '!')
// return result