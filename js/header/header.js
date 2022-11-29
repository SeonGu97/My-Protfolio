'use strict';

import Nav from "./nav/nav.js";

export default class Header {
    constructor(creator, data, loop) {
        loop(creator, data[1], data[0].name);

        const nav = new Nav(creator, data, loop);
    }
}