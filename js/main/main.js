'use strict';

import Mountain from "./mountain/mountain.js";
import Sky from "./sky/sky.js";
import Sun from "./sun/sun.js";

export default class Main {
    constructor(creator, data, loop) {
        loop(creator, data[8], data[0].name);

        const mountain = new Mountain(creator, data, loop);
        const sun = new Sun(creator, data, loop);
        const sky = new Sky(creator, data, loop);
    }
}