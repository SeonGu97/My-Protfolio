'use strict';

import Header_Back_Menu from "./header_back_menu/header_back_menu.js";

export default class Header_Back {
    constructor(creator, data, loop) {
        loop(creator, data[3], data[1].name);

        const header_back_menu = new Header_Back_Menu(creator, data, loop);
    }
}