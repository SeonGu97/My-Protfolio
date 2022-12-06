'use strict';

import Eyes from "./eyes/eyes.js";
import Hole from "./hole/hole.js";

export default class Face {
    constructor(creator, data, loop) {
        loop(creator, data[20], data[7].name);

        const eyes = new  Eyes(creator, data, loop);
        const hole = new Hole(creator, data, loop);
    }
}