'use strict';

import Lower_Body from "./lower_body/lower_body.js";

export default class Main {
    constructor(creator, data, loop) {
        loop(creator, data[8], data[6].array);

        const lower_body = new Lower_Body(creator, data, loop);
    }
}