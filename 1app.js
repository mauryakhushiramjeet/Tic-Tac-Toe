let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector('#Reset-btn')
let newBtn = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turnO = true;
//trunX,turnO
const winPttern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box has been clicked");
        if (turnO) {//playero
            box.innerText = "o";
            turnO = false;
        } else {//playerx
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;//ew can not chage the value of button which is already clicked by another personby using this disabbled propert
        cheakWinner();
    });
});
const resetGame = () => {
    turnO = true;
    boXenable();
    msgcontainer.classList.add("hide");
}
const boXenable = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = " ";
    }
};

let boXdisabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = '  Congratulation , Winner is' + " (" + winner + ")";
    msgcontainer.classList.remove("hide");
    boXdisabled();
}
const cheakWinner = () => {
    for (let pattern of winPttern) {
        // console.log(pattern);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
        // else{

        // }
    }
}
newBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);