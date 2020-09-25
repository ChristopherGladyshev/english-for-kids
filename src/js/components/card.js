export const cardEvent = {
    elements: {
        card: document.querySelectorAll('.card'),
    },
    create_HTML_card(imgSrc, frontText, backText, audioSrc) {
        let altText = imgSrc.slice('/'+ 1,'.');

        return `<div class="card">
                        <div class="front">Front
                            <div class="card-switch">
                                <p class="translate">&#8635;</p>
                            </div>
                        </div>
                        <div class="back">
                            <img src="${imgSrc}" alt="frog">
                            <div class="card-switch"></div>
                        </div>
                        <div class="card-wrapper"></div>
                </div>`
    },
    translete(event) {
        if (event.classList == "translate") {

            const cardEvent = event.parentNode.parentNode.parentNode;
            const back = cardEvent.querySelector('.back');
            const front = cardEvent.querySelector('.front');

            this.elements.card.forEach((element) => {
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
    }
}