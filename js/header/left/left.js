'ues strict';

import Logo from "./logo/logo.js";
import Menu_Wrap from "../menu_wrap/menu_wrap.js";

export default class Left {
    constructor(creator, data, loop) {
        loop(creator, data[2], data[1].name);

        const logo = new Logo(creator, data, loop);
        const menu_wrap = new Menu_Wrap(creator, data, loop);
    }
}