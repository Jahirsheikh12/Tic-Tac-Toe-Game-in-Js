let music = new Audio('music.mp3');

let tap = new Audio('ting.mp3');

let gameOver = new Audio('gameover.mp3');

let curturn = "X";

let isgameover = false;


// function to change the turn
const changeTurn = () => {
    return curturn === 'X' ? '0' : 'X';
}


// function to check win 

const checkWIn = () => {
    
    let boxtext = document.getElementsByClassName('text-box');

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach((e) => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector('.turn-info').innerText = `${boxtext[e[2]].innerText} Won`;
            isgameover = true;
        }
    })
    

}

// reset the game 

let resetBtn = document.querySelector('.reset-btn');

resetBtn.addEventListener('click' , () => {
    let resetText = document.querySelectorAll('.text-box');

    Array.from(resetText).forEach((element) => {
        element.innerText = '';
    })
})

// game logic

let box = document.getElementsByClassName('boxes');

Array.from(box).forEach((element) => {
    let boxText = element.querySelector('.text-box');

    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = curturn;
            curturn = changeTurn();
            tap.play();
            checkWIn();
            if(!isgameover){
            document.getElementsByClassName('turn-info')[0].innerText = "turn for " + curturn;
            }
        }
    })
})
