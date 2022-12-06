'use strict';

import Nose from "../nose/nose.js";

export default class Hole {
    constructor(creator, data, loop) {
        loop(creator, data[22], data[20].name);

        const nose = new Nose(creator, data, loop);
    }
}