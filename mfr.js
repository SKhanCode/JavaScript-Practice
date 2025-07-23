console.log("MFR")


let arr = [1, 2, 5, 9, 12]

// let newarr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)  // (  **2 for power   ) */
// }
// console.log(newarr);

// let newarr = arr.map((e, index, array)=>{
let newarr = arr.map((e)=>{
    return e**2;
}) 

console.log(newarr);


const greaterThenSeven = (e)=>{
    if(e>7){
        return true;
    }
    return
    false;
}
console.log(newarr.filter (greaterThenSeven));

// Reduce method---
// let arr2 = [1,2,3,4,5,6]

// const red = (a, b)=>{
//     return a*b;
// }

// console.log(arr2.reduce(red))



// .form method---
// Array.from("Sohel");