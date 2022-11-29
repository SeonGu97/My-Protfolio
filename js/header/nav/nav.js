'use strict';

import Logo from "./logo/logo.js";

export default class Nav {
    constructor(creator, data, loop) {
        loop(creator, data[2], data[1].name);

        const logo = new Logo(creator, data, loop);
    }
}