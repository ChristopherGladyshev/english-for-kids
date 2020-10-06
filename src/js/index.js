import '../sass/style.css';
import '../sass/style.scss';

import {
    cards
} from "./cards";
import {
    burgerMenu
} from "./components/burger__menu";
import {
    createNav
} from "./components/nav";
import {
    cardEvent
} from "./components/card";

import {
    checkedGame
} from "./components/game";


const check = document.getElementById('check');


createNav.create(cards);

cardEvent.create__cards(cards, 1);


document.addEventListener('click', (event) => {
    burgerMenu.toggleMenu(event.target);
    cardEvent.translete(event.target);
    cardEvent.autoplay(event.target, check);
    clickNav(event);
    checkedGame.check(event.target, check);
    checkedGame.game(event.target);
});




function clickNav(event) {
    if (event.target.classList == 'burger-menu__link') {

        switch (event.target.innerText) {
            case "ACTION (SET A)":
                cardEvent.create__cards(cards, 1);
                checkFALSE();
                break;
            case "ACTION (SET B)":
                cardEvent.create__cards(cards, 2);
                checkFALSE();
                break;
            case "ANIMAL (SET A)":
                cardEvent.create__cards(cards, 3);
                checkFALSE();
                break;
            case "ANIMAL (SET B)":
                cardEvent.create__cards(cards, 4);
                checkFALSE();
                break;
            case "CLOTHES":
                cardEvent.create__cards(cards, 5);
                checkFALSE();
                break;
            case "EMOTIONS":
                cardEvent.create__cards(cards, 6);
                checkFALSE();
                break;
        }
    }
}

function checkFALSE() {
    check.checked = false;
}