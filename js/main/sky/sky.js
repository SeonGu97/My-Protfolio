'use strict';

import Cloud from "./cloud/cloud.js";

export default class Sky {
    constructor(creator, data, loop) {
        loop(creator, data[12], data[8].name);

        const cloud = new Cloud(creator, data, loop);
    }
}