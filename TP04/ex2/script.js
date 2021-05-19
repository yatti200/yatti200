let game = document.getElementsByClassName("game");

document.onmousemove = function () {

    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";


    for (let i = 0; i < 2; i++) {
        game[i].style.left = x;
        game[i].style.top = y;
        game[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }

    console.log("x =" + x);
    console.log("y = " + y);
}