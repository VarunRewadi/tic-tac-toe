var turn = "X"; 
var gameover = false;

function changeTurn(){
    if(turn === "X"){
        turn = "O";
    }
    else if(turn === "O"){
        turn = "X"
    }
} 

function checkWin() {
    var boxtext = document.querySelectorAll(".boxtext");
    var wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && 
            (boxtext[e[0]].innerText !== "")) {
                document.getElementById("turn-count").innerText = boxtext[e[0]].innerText + " has Won!";
                gameover = true;
        }
    });

}

for (var i = 0; i < 9; i++) {
    document.querySelectorAll(".box")[i].addEventListener("click", function(){
        var clickedBox = this.querySelector(".boxtext");

        if (clickedBox.innerText === "" && !gameover) {
            clickedBox.innerText = turn;
            checkWin();
            if (!gameover) {
                changeTurn();
                document.getElementById("turn-count").innerText = "Turn for " + turn;
            }
        }
    });
}

function reset() {
    for (var i = 0; i < 9; i++) {
        document.querySelectorAll(".boxtext")[i].textContent = "";
    }
    gameover=false;
    turn = "X";
    document.getElementById("turn-count").innerText = "Turn for " + turn;

}