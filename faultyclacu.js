console.log("Faulty calculator");

let random = Math.random();
console.log(random)
let a = prompt("Enter first number");
let b = prompt("Enter Operation");
let c = prompt("Enter second number");


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
if (random>0.1) {
    //perfect calculation
    console.log(`the result is ${a} ${b} ${c}`)
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}   
else
{
    //incorrect calculation
    b = obj[b];

    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)

}
