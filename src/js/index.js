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


const elementHidden = (HTML__Element) =>{
  HTML__Element.style.display = "none";
}

const data = null;
const check = document.getElementById('check');
const preloader = document.querySelector('.preloader-wrapper');



cards.then(dataCard => {
  createNav.create(dataCard);
  cardEvent.create__cards(dataCard, 1);
  elementHidden(preloader);
});


  





document.addEventListener('click', (event) => {
  cards.then(data => {
    burgerMenu.toggleMenu(event.target);
    cardEvent.translete(event.target);
    cardEvent.autoplay(event.target, check);
    clickNav(event);
    checkedGame.check(event.target, check);
    checkedGame.game(event.target);
  });
});




function clickNav(event) {
  cards.then(data => {
    if (event.target.classList == 'burger-menu__link') {

      switch (event.target.innerText) {
        case "ACTION (SET A)":
          cardEvent.create__cards(data, 1);
          checkFALSE();
          break;
        case "ACTION (SET B)":
          cardEvent.create__cards(data, 2);
          checkFALSE();
          break;
        case "ANIMAL (SET A)":
          cardEvent.create__cards(data, 3);
          checkFALSE();
          break;
        case "ANIMAL (SET B)":
          cardEvent.create__cards(data, 4);
          checkFALSE();
          break;
        case "CLOTHES":
          cardEvent.create__cards(data, 5);
          checkFALSE();
          break;
        case "EMOTIONS":
          cardEvent.create__cards(data, 6);
          checkFALSE();
          break;
      }
    }
  });
}

function checkFALSE() {
  check.checked = false;
}