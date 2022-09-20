//constante die alle kaarten bevat
const cards = document.querySelectorAll('.memoryCard');

//Variabelen die de staat van het spel bijhouden
var flipCount = 0;
var gameScore = 0;
var matchCount = 0;

//Variabele die het element die het bord illustreert bevat
var board = document.getElementById("memoryBoard");

//Variabeles die de staat van objecten in het spel bevatten
let boardFreeze = false;
let firstCard, secondCard, thirdCard, fourthCard;

//Functie die de interactie met de kaarten mogelijk maakt, checkt of er matches zijn tussen kaarten en de staat van de kaarten benadert
function turnCard() {
    if(boardFreeze) return;
    if(this === firstCard) return;
    this.classList.add('turn');
        //It 1
    flipCount ++;
    if (flipCount === 1) {
        firstCard = this;
    }
    if(flipCount === 2) {
        //It 1
        secondCard = this;
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            firstCard.removeEventListener('click', turnCard);
            secondCard.removeEventListener('click', turnCard);
        }
        else {
            boardFreeze = true;
            setTimeout(() => {
                firstCard.classList.remove('turn');
                secondCard.classList.remove('turn');
                boardWipe();
                flipCount = 0;
                boardFreeze = false;
            }, 750);
            subtractScore();
        }
    }
    if (flipCount === 3) {
        //It 1
        thirdCard = this;
        if (secondCard.dataset.framework === thirdCard.dataset.framework) {
            thirdCard.removeEventListener('click', turnCard);
        }
        else {
            boardFreeze = true;
            setTimeout(() => {
                firstCard.classList.remove('turn');
                secondCard.classList.remove('turn');
                thirdCard.classList.remove('turn');
                boardWipe();
                flipCount = 0;
                boardFreeze = false;
            }, 750);
            subtractScore();
        }
    }
    if (flipCount === 4) {
        //It 1
        fourthCard = this;
        if (thirdCard.dataset.framework === fourthCard.dataset.framework) {
            fourthCard.removeEventListener('click', turnCard);
            flipCount = 0;
            addScore();
            dissapear();
        }
        else {
            boardFreeze = true;
            setTimeout(() => {
                firstCard.classList.remove('turn');
                secondCard.classList.remove('turn');
                thirdCard.classList.remove('turn');
                fourthCard.classList.remove('turn');
                boardWipe();
                flipCount = 0;
                boardFreeze = false;
            }, 750);
            subtractScore();
        }
    }
}

//Functie die de geklikte volgorde van kaarten reset na een match of faal
function boardWipe() {
    [firstCard, secondCard, thirdCard, fourthCard] = [null, null, null, null];
    cards.forEach(card => card.addEventListener('click', turnCard));
}

//functie die de score update, ophoogt en aan het einde van het spel laat zien
function addScore() {
    gameScore += 20;
    matchCount ++;
    document.getElementById("scoreText").innerHTML = "Score: " + gameScore;
    if (matchCount === 13) {
        setTimeout(() => {
        board.parentNode.removeChild(board);
        document.getElementById("message").innerHTML = "Gefelicteerd, je hebt gewonnen met " + gameScore + "/260 Punten! &#x1F973;";
        }, 750);
    }
}

//functie die de score omlaag haalt en update
function subtractScore() {
    if (gameScore != 0) {
        gameScore --;
        document.getElementById("scoreText").innerHTML = "Score: " + gameScore;
    }
}

//Functie die de omgedraaide kaarten laaat verdwijnen na het vinden van de set waar ze toe behoren
function dissapear() {
    boardFreeze = true;
    setTimeout(() => {
        firstCard.innerHTML = "";
        secondCard.innerHTML = "";
        thirdCard.innerHTML = "";
        fourthCard.innerHTML = "";
        boardFreeze = false;
    }, 750);
}


//Functie die de kaarten willekeurig over het bord verdeelt 
(function shuffle() {
    cards.forEach(card => {
        let randomisedPosition = Math.floor(Math.random() * 52);
        card.style.order = randomisedPosition;
    });
})();

cards.forEach(card => card.addEventListener('click', turnCard))
    ;