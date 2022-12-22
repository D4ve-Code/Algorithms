// On te donne 2 angles d'un triangle.
// écris la fonction qui permet de récupérer la valeur du 3e angle.
// (Pour rappel, la somme des 3 angles d'un triangle est toujours égale à 180)
// Exemple :
// thirdAngle(90, 30) doit renvoyer 60
// thirdAngle(20, 80) doit renvoyer 80 

// function thirdAngle(a, b) {
 
// } 



function thirdAngle(a, b) {
    const angle = (180 - (a + b));
    return angle
   }
   console.log(thirdAngle(90, 30))
   
   // -----------------------------
   
//    function thirdAngle(firstAngle, secondAngle) {
//        const result = 180 - firstAngle - secondAngle;
//        return result
//    }
//    const firstAngle = 30;
//    const secondAngle = 90;
   
//    console.log(thirdAngle(firstAngle, secondAngle))
   
//    // -----------------------------
   
//    const thirdAngle = (a, b) => {
//        return 180 - a - b;
//    }
//    console.log(thirdAngle(90 , 30));
   
//    // -----------------------------
   
//    const thirdAngle = (a, b) => 180 - a - b;
   
//    console.log(thirdAngle(90 , 30));