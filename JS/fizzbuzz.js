console.log("start");
console.log("-------------------------------------------------");

const number = 16;
const fizzBuzz = (num) => {
    for (let i = 0; i<= num; i++){
        if (i % 3 === 0 && i % 5 ===0){
            console.log("fizz Buzz");
        }
        else if (i%5===0){
            console.log("buzz");
        }
        else if (i % 3 === 0 ){
            console.log("fizz");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz(number)

console.log("-------------------------------------------------");
console.log("end");
