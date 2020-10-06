let arrCards = null;
let textCards = [];
let card = [];
const articel = document.getElementById('a');
const star = document.querySelector('.wrapper__star');
let events = null;
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
        star: `<img src="./img/star-win.svg" alt="">`,
        starError: `<img src="./img/star.svg" alt="">`,
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
                events = null;
                events = event;
                card.forEach((element) => {
                    element.front.children[1].classList.remove("card-switch__hiden");
                });
            }
        }
    },

    game(event) {

        if (event.classList == 'card-wrapper' && check.checked) {

            if (event.parentNode.children[0].children[1].children[1].innerText == textCards[counter]) {
                counter++;
                console.log(counter);
                singRandom(textCards, counter);
                this.starAdd(true);

            } else if (event.parentNode.children[0].children[1].children[1].innerText != textCards[counter]) {
                let error = [
                    'error',
                ]
                singRandom(error, 0);
                this.starAdd();
            } else if (counter == 8) {
                counter = 0;
                console.log(counter + 'stop');
            }


        } else if (check.checked) {
            singRandom(textCards, counter);
        }




    },

    starAdd(value) {
        if (value) {
            star.insertAdjacentHTML('beforeend', this.elements.star)
        } else star.insertAdjacentHTML('beforeend', this.elements.starError)
    }


}

function singRandom(arr, index) {
    checkedGame.elements.sing(arr[index]);

}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}