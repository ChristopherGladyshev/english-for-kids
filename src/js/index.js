import '../sass/style.css';
import '../sass/style.scss';
import { cards } from "./cards";

import {
    burgerMenu
} from "./components/burger__menu";

import {
    createNav
} from "./components/nav";

createNav.create(cards);

document.addEventListener('click', (event) => {
    // event.preventDefault();
    burgerMenu.toggleMenu(event.target);
})