/*
Voici un tableau de personnes.
Tu dois écire le code de la fonction findAdult, qui renvoie un
nouveau tableau avec 2 tableaux à l'intérieur: 
- Le premier avec uniquement les femmes adultes.
- Le deuxième avec uniquement les hommes adultes.
(Compte tenu qu'on est adulte à 18 ans)
Exemple : output [ [femmes adultes], [hommes adultes] ]
*/
// const persons = [
//     { name: 'Mary Poppins', age: 32, sex: 'female' },
//     { name: 'Tony Stark', age: 36, sex: 'male' },
//     { name: 'John Doe', age: 12, sex: 'male' },
//     { name: 'Jane Doe', age: 6, sex: 'female' },
//     { name: 'Maggie Simpson', age: 2, sex: 'female' },
//     { name: 'Leonardo', age: 92, sex: 'male' },
//     { name: 'Carla Moreau', age: 24, sex: 'female' },
//     { name: 'Mickael Jackson', age: 17, sex: 'male' },
//     { name: 'Penelope Milena', age: 27, sex: 'female' },
//     { name: 'Homer Simpson', age: 45, sex: 'male' },
//     { name: 'Leonardo Di Caprio', age: 42, sex: 'male' },
//     { name: 'Carla Bruni', age: 54, sex: 'female' },
//     { name: 'Lisa Simpson', age: 13, sex: 'female' },
//     { name: 'Millie Bobby Brown', age: 15, sex: 'female' },
//     { name: 'Penelope Cruz', age: 47, sex: 'female' },
//   ];
  
  
//   function findAdults(arr) {
//     // Your code here !
   
//   }
  
//   console.log(findAdults(persons));


console.log("start");
console.log("-------------------------------------------------");


let persons = [
    { name: 'Mary Poppins', age: 32, sex: 'female' },
    { name: 'Tony Stark', age: 36, sex: 'male' },
    { name: 'John Doe', age: 12, sex: 'male' },
    { name: 'Jane Doe', age: 6, sex: 'female' },
    { name: 'Maggie Simpson', age: 2, sex: 'female' },
    { name: 'Leonardo', age: 92, sex: 'male' },
    { name: 'Carla Moreau', age: 24, sex: 'female' },
    { name: 'Mickael Jackson', age: 17, sex: 'male' },
    { name: 'Penelope Milena', age: 27, sex: 'female' },
    { name: 'Homer Simpson', age: 45, sex: 'male' },
    { name: 'Leonardo Di Caprio', age: 42, sex: 'male' },
    { name: 'Carla Bruni', age: 54, sex: 'female' },
    { name: 'Lisa Simpson', age: 13, sex: 'female' },
    { name: 'Millie Bobby Brown', age: 15, sex: 'female' },
    { name: 'Penelope Cruz', age: 47, sex: 'female' },
  ];


//-------------------- PSEUDO CODE --------------- 
// Definie un tableau result vide
// Definie une variable où on stock un tableau de femme 
// Definie une variable où on stock un tableau de homme
// On crée une boucle où on part de 0 jusqu à la taille du tableau
// Condition verifie femme age et sex superieur ou egale a 18, si elle bonne on remplit le tableau femme
// Condition verifie homme age et sex superieur ou egale a 18, si elle bonne on remplit le tableau male 
// Remplie le tableau vide result avec le tableau femme et homme


let result = []
let female = []
let male = []

function findAdults(arr) {
for (let i = 0; i < arr.length; i++){
    if (arr[i].age >= 18 && arr[i].sex == "female") {
        female.push(arr[i])
    }
    else if (arr[i].age >= 18 && arr[i].sex == "male") {
        male.push(arr[i])
    }
}
//   result.push(female)
//   result.push(male)
return result = [female, male]
}
console.log(findAdults(persons));


/*  2e solution -------*/ 

const tab=[]
function findAdults(tab){
  const tabWomen = persons.filter(person => person.sex === "female" && person.age > 17);
  const tabMen = persons.filter(person => person.sex === "male" && person.age > 17);
  // console.log (tabWomen)
  // console.log (tabMen)
  return tab = [tabWomen, tabMen]
}
console.log(findAdults(tab));



// console.log(persons.every(age => age > 17 ));



console.log("-------------------------------------------------");
console.log("end");
