console.log("Async and Await");

// async function getdata() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 4000);
//     })
    // }


async function getdata() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    console.log(x);
    return 544;
      
}


async function main() {
    console.log("Loading modules 1");
    console.log("Loading something 2");
    let data = await getdata();
    console.log(data);
    
    console.log("Process data");
    console.log("task 2");
        
}
main()

