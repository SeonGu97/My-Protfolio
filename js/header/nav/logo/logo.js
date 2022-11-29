'use strict';

import Words from "./words/words.js";

export default class Logo {
    constructor(creator, data, loop) {
        loop(creator, data[3], data[2].name);

        const words = new Words(creator, data, loop);
    }
}