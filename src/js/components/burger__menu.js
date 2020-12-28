const menu = document.querySelector(".burger-menu");

export const burgerMenu = {
    toggleMenu(event) {
        if (event.classList == "burger-menu__button" || event.classList == "burger-menu__lines") {
            menu.classList.toggle('burger-menu__active');
        } else if (menu.classList[1] == "burger-menu__active") {
            menu.classList.toggle('burger-menu__active');
        }
    }
};