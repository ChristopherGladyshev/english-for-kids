export const cardEvent = {
    elements: {
        sing: (text) => {
            let audio = new Audio();
            audio.src = `audio/${text}.mp3`;
            audio.autoplay = true;
            return audio;
        },
        articel: document.getElementById('a'),
        cards: '',
    },
    create_HTML_card({ word, translation, image, audioSrc }) {
        let index = image.indexOf('/')
        let altText = image.slice(index + 1, image.length - 4);

        return `<div class="card">
                        <div class="front">
                            <img src="${image}" alt="${altText}">
                            <div class="card-switch">
                                <p class="translate">&#8635;</p>
                                <span>${word}</span>
                            </div>
                        </div>
                        <div class="back">
                            <img src="${image}" alt="${altText}">
                            <div class="card-switch">
                                <span>${translation}</span>
                            </div>
                        </div>
                        <div class="card-wrapper"></div>
                </div>`
    },
    translete(event) {
        if (event.classList == "translate") {
            const card = document.querySelectorAll('.card'),
                cardEvent = event.parentNode.parentNode.parentNode,
                back = cardEvent.querySelector('.back'),
                front = cardEvent.querySelector('.front');

            card.forEach((element) => {
                element.addEventListener('mouseout', (event) => {
                    if (event.target.classList != "translate") {
                        back.classList.remove('translate__back');
                        front.classList.remove('translate__front');
                    }
                })
            })

            back.classList.add('translate__back');
            front.classList.add('translate__front');
        }
    },
    create__cards(array, id) {
        this.elements.articel.innerHTML = "";
        array.forEach((element, index) => {
            if (index == id) {

                element.forEach((element) => {
                    this.elements.cards += this.create_HTML_card(element);
                });
                this.elements.articel.insertAdjacentHTML('afterbegin', this.elements.cards);
                this.elements.cards = "";
            }
        });
    },
    autoplay(event, check) {
        if (event.classList == "card-wrapper" && check.checked !== true) {
            let textCard = event.parentNode.children[0].children[1].children[1].innerText;
            this.elements.sing(textCard);
        }
    }

}