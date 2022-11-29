'use strict';

import Text from "./text/text.js";

export default class Words {
    constructor(creator, data, loop) {
        loop(creator, data[4], data[3].name);

        const text = new Text(creator, data, loop);
    }
}