console.log("Selecting by Ids, class and more in js");

//  let dibbe = document.getElementsByClassName("Box")

//  console.log(dibbe);

//  dibbe[2].style.backgroundColor = "Green";

//2nd-----
// document.getElementById("redbox").style.backgroundColor = "red";

// document.querySelector(".Box").style.backgroundColor = "black";
console.log(document.querySelectorAll(".Box"));

document.querySelectorAll(".Box").forEach(element => {
    // console.log(e);
        element.style.backgroundColor = "blue";
    
});

