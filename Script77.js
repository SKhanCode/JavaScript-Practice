
let viewStr
if (views < 1000000) {
    let viewStr = views / 1000 + "K";
}
else if (views > 1000000) {
    let viewStr = views / 1000000 + "M";
}
else {
    let viewStr = view / 1000 + "K";
}
let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}https://i.ytimg.com/vi/2nk5gVRi8LE/hqdefault.jpg" alt="">
                <div class = "capsule">31:06</div>
            </div>
            <div class="txt">
                <h1>${title}</h1>
                <p>${cName}. ${viewStr} views . ${monthsold}2 months ago</p>
            </div>

        </div>`