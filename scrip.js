console.log("Welcome to tictac toe");
let music = new Audio("./Sounds/click.wav");        // music.play();
let audioturn = new Audio("./Sounds/click.wav");
let gameover = new Audio("./Sounds/failer.wav");    // gameover.play();
let turn = "X";


// dunction to change the turn
const changeTurn = () => {

    return turn === "x" ? "0" : "x"
}

// function to chack for a win  

const chackWin = () => {


}
// Game  logic
let boxes = document.getElementsByClassName("Box");
Array.from(boxes).forEach(element => {

    let boxtext = element.querySelector('.boxtext');
    boxtext.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            chackWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }

    })
});
