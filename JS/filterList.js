// Dans cet Algo vous allez créer une fonction qui prend une liste d'entiers et de 
// chaînes non négatifs et renvoie une nouvelle liste avec les chaînes filtrés 
// Exemple : 
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]



console.log("start");
console.log("-------------------------------------------------");

const filter_list = (elem) => {
    const result = [];
    for (let i = 0; i<= elem.length; i++){
        if (!isNaN(elem[i])){
            result.push(elem[i])
        }
}
return result
}
console.log(filter_list([1,2,'a','b']))

// const filter_list = (elem) => {
//     const result=[];
//     elem.map((e) => {
//         if (typeof e === 'number'){
//             result.push(e);
//         }
//     });
//     console.log(result);
// }
// console.log(filter_list(['c',1,'d',2,'a',4,'b']));

console.log("-------------------------------------------------");
console.log("end");
