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
    create_HTML_card(imgSrc, frontText, backText, audioSrc) {
        let index = imgSrc.indexOf('/')
        let altText = imgSrc.slice(index + 1, imgSrc.length - 4);

        return `<div class="card">
                        <div class="front">
                            <img src="${imgSrc}" alt="${altText}">
                            <div class="card-switch">
                                <p class="translate">&#8635;</p>
                                <span>${frontText}</span>
                            </div>
                        </div>
                        <div class="back">
                            <img src="${imgSrc}" alt="${altText}">
                            <div class="card-switch">
                                <span>${backText}</span>
                            </div>
                        </div>
                        <div class="card-wrapper"></div>
                </div>`
    },
    translete(event) {
        if (event.classList == "translate") {
            const card      = document.querySelectorAll('.card'),
                  cardEvent = event.parentNode.parentNode.parentNode,
                  back      = cardEvent.querySelector('.back'),
                  front     = cardEvent.querySelector('.front');

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
                    this.elements.cards += this.create_HTML_card(element.image,
                        element.word,
                        element.translation,
                        element.audioSrc);
                });
                this.elements.articel.insertAdjacentHTML('afterbegin', this.elements.cards);
                this.elements.cards = "";
            }
        });
    },
    autoplay(event, check){
        if (event.classList == "card-wrapper" && check.checked !== true){
            let textCard = event.parentNode.children[0].children[1].children[1].innerText;
            this.elements.sing(textCard);
        }
    }
    
}