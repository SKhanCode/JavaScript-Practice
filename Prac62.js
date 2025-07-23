console.log("random name generator with some given word ");


let rand = Math.random();

//Generate first word;
if (rand < 0.33) {
    first = "You";
}
else if (rand < 0.66 && rand > 0.33) {
    first = "Your friend";
}
else if (rand < 1 && rand > 0.66) {
    first = "Your enemy";
}
//Generate Second word;
let rand2 = Math.random();

if (rand2 < 0.33) {
    second = "is";
}
else if (rand2 < 0.66 && rand2 > 0.33) {
    second = "was";
}
else {
    second = "will be";
}
//Generate third word;
let rand3 = Math.random();

if (rand3 < 0.33) {
    third = "Rich";
}
else if (rand3 < 0.66 && rand3 > 0.33) {
    third = "Poor";
}
else  {
    third = "Happy";
}

console.log(`${first} ${second} ${third}`);
console.log(first + " " + second + " " + third);



