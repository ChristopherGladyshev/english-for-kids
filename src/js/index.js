import '../sass/style.css';
import '../sass/style.scss';
import {cards} from "./cards";
import {burgerMenu} from "./components/burger__menu";
import {createNav} from "./components/nav";
import {cardEvent} from "./components/card";




createNav.create(cards);

document.addEventListener('click', (event) => {
    // event.preventDefault();
    burgerMenu.toggleMenu(event.target);
    cardEvent.translete(event.target);
});

const imgSrc ="img/giraffe.jpg";
let altText = imgSrc[2].slice();
console.log(altText);