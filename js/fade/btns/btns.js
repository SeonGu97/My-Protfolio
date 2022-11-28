'ues strict';

import Prev from "./prev/prev.js";
import Next from "./next/next.js";

export default class Btns {
    constructor(creator, data, loop) {
        loop(creator, data[18], data[17].name);

        const prev = new Prev(creator, data, loop);
        const next = new Next(creator, data, loop);
    }
}