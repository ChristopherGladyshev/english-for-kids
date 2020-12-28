import { articel, star, check, gameOver} from "./constants";
import { shuffle, singRandom }from  "./subsidiary";


let arrCards = null;
let textCards = [];
let card = [];

let counter = 0;


export const checkedGame = {
    elements: {
        cards: null,
        sing: (text) => {
            let audio = new Audio();
            audio.src = `audio/${text}.mp3`;
            audio.autoplay = true;
            return audio;
        },
        star: `<img src="./img/star-win.svg" alt="star-win" class="true-Game">`,
        starError: `<img src="./img/star.svg" alt="star" class="false-Game">`,
    },

    check(event, check) {
        if (event.className == "checkbox__input") {
            if (check.checked) {
                this.elements.cards = document.querySelectorAll('.card');
                arrCards = [];
                textCards = [];
                card = [];

                this.elements.cards.forEach((element) => {
                    arrCards.push(element);
                    const objCard = {
                        front: element.children[0],
                        back: element.children[1],
                    }
                    card.push(objCard);
                });

                card.forEach((element) => {
                    element.front.children[1].classList.add("card-switch__hiden");
                    textCards.push(element.front.children[1].children[1].innerText);
                });

                shuffle(arrCards);

                articel.innerHTML = '';
                arrCards.forEach((elem) => {
                    articel.insertAdjacentElement('afterbegin', elem);
                });

                shuffle(textCards);


            } else {
                this.checkFalse()
            }
        }
    },

    checkFalse() {
        ! function (params) {
            const cardWrapper = document.querySelectorAll(".card-wrapper");
            cardWrapper.forEach((element) => {
                element.classList.remove('blur')
            });
        }();

        star.innerHTML = '';
        card.forEach((element) => {
            element.front.children[1].classList.remove("card-switch__hiden");
        });
        gameOver.classList.remove('game-over');
        gameOver.innerText = '';
        check.checked = false;
    },

    game(event) {

        if (event.classList == 'card-wrapper' && check.checked) {

            if (event.parentNode.children[0].children[1].children[1].innerText == textCards[counter]) {
                counter++;
                singRandom(textCards, counter);
                this.starAdd(true);
                event.classList.add("blur");
            } else if (event.parentNode.children[0].children[1].children[1].innerText != textCards[counter]) {
                let error = [
                    'error',
                ]
                singRandom(error, 0);
                this.starAdd();
            }


        } else if (check.checked) {
            singRandom(textCards, counter);
        }

        ! function () {
            if (counter == 8) {
                counter = 0;
                if (star.children.length == 8) {
                    checkedGame.GameOver(true);
                } else {
                    checkedGame.GameOver(false, star.children.length);
                };
            }
            if(event.classList == 'game-over'){
                checkedGame.checkFalse()
            }
        }();


    },

    starAdd(value) {
        if (value) {
            star.insertAdjacentHTML('beforeend', this.elements.star)
        } else star.insertAdjacentHTML('beforeend', this.elements.starError)
    },


    GameOver(value, counterStar) {
        if (value) {
            gameOver.classList.add('game-over');
            gameOver.innerText = "Okay, try playing again";
        } else {
            gameOver.classList.add('game-over');
            gameOver.innerText = `You have ${counterStar - 8} mistakes, please try again`;
        }
    },
}

