console.log("Array in JS");

let arr = [1, 2, 3, 4, 5];

console.log(arr[3]);//output is 4

arr[3] = 12;
console.log(arr[3]);//output is 12

console.log(arr);

// console.log(arr.length);

// console.log(arr[0]);
// console.log(arr[3]);//output 12 because Array is mutable...

// console.log(arr.toString);


// console.log(arr.join(" And "));


//For each loop---

let a = [1, 2, 3, 4, 5];

a.forEach((value, index, arr) => {
    console.log(value, index, arr)

});


// let obj = {

//     a: 1,
//     b: 2,
//     c: 3,

// }

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element)
//     }
// }

for (const element of a) {
    console.log(element)
}

