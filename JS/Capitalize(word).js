console.log("start");
console.log("-------------------------------------------------");

function capitalize(word){
 const wordMinuscule = word.toLowerCase();
 const arrayWordMinuscule = wordMinuscule.split("");
 arrayWordMinuscule[0] = arrayWordMinuscule[0].toUpperCase();

 const newWord = arrayWordMinuscule.join("");
 return newWord;
}

console.log(capitalize("bilie"));
console.log(capitalize("DAVE"));

console.log(
    '%cHello World!',
    'color: #f709bb; font-family: sans-serif; text-decoration: underline;'
  );
  
console.log("-------------------------------------------------");
console.log("end");
