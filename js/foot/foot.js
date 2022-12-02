'use strict';

import Sole from "./sole/sole.js";
import Toe from "./toe/toe.js";

export default class Foot {
    constructor(creator, data, loop) {
        loop(creator, data[14], data[17].array);

        const sole = new Sole(creator, data, loop);
        const toe = new Toe(creator, data, loop);
    }
}