'use strict';

import Main from "./main/main.js";

export default class Container {
    constructor(creator, data, loop) {
        loop(creator, data[6], data[0].array);

        const main = new Main(creator, data, loop);
    }
}