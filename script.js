let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".rst-btn")
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true; // player

let winningPatterns = [[0, 1, 2], 
                       [0, 3, 6], 
                       [0, 4, 8], 
                       [1, 4, 7], 
                       [2, 4, 6], 
                       [2, 5, 8], 
                       [3, 4, 5], 
                       [6, 7, 8]
]
const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    
}
let count = 0;   
             
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "O";
            box.style.color = "blue";
            turnO = false;
        } else{
            box.innerText = "X"
            turnO = true;
        }
        count++;
        box.disabled = true;
        checkWinner();
        
    })
})

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winningPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            } else if(count == 9){
                msg.innerText = `Match drawn, No one is winner.`;
                msgContainer.classList.remove("hide");
                newGameBtn.innerText = "Play again"
            }
        }
    }console.log(count);

}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

