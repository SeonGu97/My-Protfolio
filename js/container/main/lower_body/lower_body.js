'use strict';

import Leg from "./leg/leg.js";

export default class Lower_Body {
    constructor(creator, data, loop) {
        loop(creator, data[11], data[8].array);

        const leg = new Leg(creator, data, loop);
    }
}