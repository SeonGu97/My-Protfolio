'ues strict';

import Menu from "./menu/menu.js";

export default class Menu_Wrap {
    constructor(creator, data, loop) {
        loop(creator, data[5], data[2].name);

        const menu = new Menu(creator, data, loop);
    }
}