console.log("Function");

function greet(name) {
    console.log("Hello "+ name + " How are you?");
    console.log("Hello "+ name + " where you live?");
    console.log("Hello "+ name + " where you from?");
    console.log("Hello "+ name + " are you ok?");
}

greet("Sohel");
greet("Ahesan");

function sum(a,b) {
    // console.log(a+b);
    return a+b;
}
 result = sum(3,8);
 console.log("Sum of a and b is "+ result);
//  console.log("Sum of a and b is "+ sum(8,5));


//Arrow function:---
const func1 =(x) => {
    console.log("I am arrow function "+ x);
}

func1(15);
func1(20);
func1(8);