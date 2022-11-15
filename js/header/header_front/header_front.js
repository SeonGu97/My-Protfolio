'use strict';

import Logo from "./logo/logo.js";
import Header_Front_menu from "./header_front_menu/header_front_menu.js";

export default class Header_Front {
    constructor(creator, data, loop) {
        loop(creator, data[2], data[1].name);

        const logo = new Logo(creator, data, loop);
        const header_front_menu = new Header_Front_menu(creator, data, loop);
    }
}