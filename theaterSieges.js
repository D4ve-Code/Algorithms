
// Un employé de théatre souhaiterait obtenir la liste de tous les sièges présents dans sa salle principale.
// Dans la salle les sièges sont répartis de la manière suivantes : 
//   - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
//   - Chaque colonne contient 100 sièges, numérotés de "1" à "100"
// Compléter la fonction theaterSieges de manière à ce qu'elle retourne une matrice 
// où chaque sous-tableau liste les positions des sieges d'une rangée.
// exemple :
// [
//   ['1-1', '1-2', '1-3', ..., '1-100'], 
//   ['2-1', '2-2', '2-3', ..., '2-100'],
//   ... 
//   ['26-1', '26-2', '26-3', ..., '26-100']
// ] 

// function theaterSieges() {
//     Your code here !
//   }
  
//   console.log(theaterSieges());



console.log("start");
console.log("-------------------------------------------------");


 const theaterSieges = (colonne, sieges) => {
  let arr = [];
  for(let i = 0; i < colonne; i++){
    arr.push([])
    
    for(let y = 0; y < sieges; y++){
      arr[i].push(`${i + 1} - ${y + 1}`)
      console.log(arr)
    }
  }
   return arr 
  }
  theaterSieges(3, 5)
  
  console.log(theaterSieges(26, 10));


// // -----------------------------

  function theaterSieges(colonnes, sieges) {
    let result = [];
    for (let i = 1; i <= colonnes; i++) {
         let row = [];
         for (let j = 1; j <= sieges; j++) {
              row.push(`${i}-${j}`);
         }
         result.push(row);
    }
    return result;
  }

  console.log(theaterSieges(3, 5));
 

console.log("-------------------------------------------------");
console.log("end");
