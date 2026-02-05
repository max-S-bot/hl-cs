
let curTurn = [];
const coverSrc = "images/cover.png"; 
let p1Score = 0;
let p2Score = 0;
let shuffledCards;

window.addEventListener("load",setup);

function setup() {
    console.log("test")
    let cardsArr = [/*list of src's for cards/pictures*/];
    for (let i=1; i<=8; i++) {
        cardsArr.push("/images/"+i+".png");
    }
    const cards = document.getElementById("cards");
    shuffledCards = shuffle(cardsArr.concat(cardsArr));
    for (let i=0; i<4; i++) {
        const curRow = document.createElement("div");
        cards.appendChild(curRow);
        for (let j=0; j<4; j++) {
            const card = document.createElement("button");
            const cardImg = document.createElement("img");
            cardImg.src = coverSrc;
            card.id = i+","+j;
            cardImg.id = card.id+",img";
            cardImg.width = 140;
            cardImg.height = 130;
            card.appendChild(cardImg);
            curRow.appendChild(card);
            
            card.addEventListener("click",handleClick);
        }
        cards.appendChild(document.createElement("br"));
    }
}

function handleClick(event) {
    takeTurn(event.currentTarget);
}

function shuffle(cardsArr) {
    let shuffled = [];
    let tempCards = [].concat(cardsArr);
    for (let i=0; i<cardsArr.length; i++) {
        let next = Math.floor(Math.random()*tempCards.length);
        shuffled.push(tempCards.splice(next,1)[0]);        
    }
    return shuffled;
}

async function takeTurn(card) {
    curTurn.push(card);
    const card1 = curTurn[0];
    if (curTurn.length==1) {
        removeCover(card1);
        card1.removeEventListener("click",handleClick);
        /*await delay(2000);
        addCover(card1);*/
    } else {
        const card2 = curTurn[1];
        removeCover(card2);
        await delay(2500);
        card1.addEventListener("click",handleClick);
        const img1 = document.getElementById(card1.id+",img");
        const img2 = document.getElementById(card2.id+",img");
        if (img1.src===img2.src) {
            match(card1,card2);
        } else {
            addCover(card2);
            addCover(card1);
        }
        if (p1Score+p2Score==shuffledCards.length/2) {
            gameOver();
            
        } else {
            curTurn=[];
            changeTurn();
        }
    }
    
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function changeTurn() {
    const gameStatus = document.getElementById("gameStatus");
    if (gameStatus.innerHTML=="Player 2's turn") {
        gameStatus.innerHTML = "Player 1's turn";
    } else {
        gameStatus.innerHTML = "Player 2's turn";
    }
}

function match(card1,card2) {
    const gameStatus = document.getElementById("gameStatus");
    if (gameStatus.innerHTML=="Player 2's turn") {
        p2Score++;
        let str2 = "Player 2 Score: "
        document.getElementById("score2").innerHTML=str2+p2Score;
    } else {
        p1Score++;
        let str1 = "Player 1 Score: "
        document.getElementById("score1").innerHTML=str1+p1Score;
    }
    card1.removeEventListener("click",handleClick);
    card2.removeEventListener("click",handleClick);
}

function gameOver() {
    const gameStatus = document.getElementById("gameStatus");
    if (p1Score>p2Score) {
        gameStatus.innerHTML = "Player 1 wins!";
    } else if (p1Score<p2Score) {
        gameStatus.innerHTML = "Player 2 wins!";
    } else {
        gameStatus.innerHTML = "Tie!";
    }
    removeListeners();
}

function removeListeners() {
    for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
            let card = document.getElementById(i+","+j);
            card.removeEventListener("click",handleClick);
        }
    }
}

// covers card
function addCover(card) {
    let cardImg = document.getElementById(card.id+",img");
    cardImg.src = coverSrc;
}

// removes cover of card
function removeCover(card) {
    let i = parseInt(card.id[0]);
    let j = parseInt(card.id[2]);
    let cardImg = document.getElementById(card.id+",img");
    cardImg.src = shuffledCards[4*i+j];
    //cardImg.src = "/images/1.png";

}