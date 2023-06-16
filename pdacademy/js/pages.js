'use strict';

import menuBlock from "./modules/menu";
import pageUp from "./modules/pageUp";
import {
    videoHeight
} from "./services/constFunctions";

window.addEventListener('DOMContentLoaded', () => {
    const preload = document.querySelector('.preload');

    function ready() {
        document.querySelector('body').removeAttribute('style');
        preload.remove();
    }

    window.addEventListener("load", ready);

    menuBlock('.menu__item_link', '.menu__logo', 'bigLogo', '.menu__wrapper', 'flex-end');
    pageUp('.pageup');
    videoHeight('.curs__video')
})