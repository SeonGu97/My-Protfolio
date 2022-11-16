'use strict';

import Hill from "../hill/hill.js";

export default class Mountain {
    constructor(creator, data, loop) {
        loop(creator, data[9], data[8].name);

        const hill = new Hill(creator, data, loop);
    }
}