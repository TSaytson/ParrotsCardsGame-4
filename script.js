let cardsNumber = prompt("Digite a quantidade de cartas: ");
while (cardsNumber > 14 || cardsNumber < 4 || cardsNumber % 2 !== 0)
    cardsNumber = prompt(
        "Quantidade de cartas inválida, insira um número par entre 4 e 14:"
    );
let cardsImages = [
    "./bobrossparrot.gif",
    "./explodyparrot.gif",
    "./fiestaparrot.gif",
    "./metalparrot.gif",
    "./revertitparrot.gif",
    "./tripletsparrot.gif",
    "./unicornparrot.gif"
];
let activeCards = 0;
function giveCards() {
    const card = document.querySelector(".cards");
    for (let i = 0; i < cardsNumber; i++) {
        card.innerHTML =
            card.innerHTML +
            `<div class="front-face" onclick="turnCard(this)">
    <img src=${cardsImages[i]} />
    </div>`;
    }
}
giveCards();
const testActiveCards = document.querySelectorAll(".turned");
function turnCard(selector) {
    if (activeCards <= 2) {
        if (testActiveCards[0] === undefined) {
            selector.classList.remove("front-face");
            selector.classList.add("turned");
            activeCards++;
        }
        if (testActiveCards[1] === undefined) {
            selector.classList.remove("front-face");
            selector.classList.add("turned");
            activeCards++;
        }
    }
}
