'use strict';

import Logo from "./logo/logo.js";
import Head from "./head/head.js";

export default class Nav {
    constructor(creator, data, loop) {
        loop(creator, data[2], data[1].name);

        const logo = new Logo(creator, data, loop);
        const head = new Head(creator, data, loop);
    }
}