export const createNav = {
    elements: {
        menu__nav: document.querySelector('.burger-menu__nav'),
        battery: '',
    },

    create(cards) {
        cards.forEach((element, index) => {
            if (index == 0) {
                element.forEach(elem => {
                    this.elements.battery += `<a href="#" class="burger-menu__link">${elem}</a>`;
                });
                this.elements.menu__nav.insertAdjacentHTML('afterbegin', this.elements.battery);
            }
        });
    },
}