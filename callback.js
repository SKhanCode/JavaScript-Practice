console.log("CallBack Function");


const fn = () => {
  console.log("Nothing");
  
}

const callback = (arg, fn) => {
    console.log(arg);
    fn();
}



const loadScript = (src, CallBack) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Sohel",fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
