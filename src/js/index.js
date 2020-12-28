import '../sass/style.css';
import '../sass/style.scss';

import { cards } from "./cards";
import { burgerMenu } from "./components/burger__menu";
import { createNav } from "./components/nav";
import { cardEvent } from "./components/card";
import { checkedGame } from "./components/game";
import { elementHidden } from "./components/subsidiary";
import { preloader, check } from "./components/constants";


cards.then(data => {
  createNav.create(data);
  cardEvent.create__cards(data, 1);
  setTimeout(() => {
    elementHidden(preloader);
  }, 1000);
 

  document.addEventListener('click', (event) => {
    const element = event.target;
    burgerMenu.toggleMenu(element);
    cardEvent.translete(element);
    cardEvent.autoplay(element, check);
    clickNav(event);
    checkedGame.check(element, check);
    checkedGame.game(element);
  });




  function clickNav(event) {
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
  }

  function checkFALSE() {
    check.checked = false;
  }
});