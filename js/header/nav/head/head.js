'use strict';

import Ear from "./ear/ear.js";
import Arm from "./arm/arm.js";

export default class Head {
    constructor(creator, data, loop) {
        loop(creator, data[7], data[2].name);

        const ear = new Ear(creator, data, loop);
        const arm = new Arm(creator, data, loop);
    }
}