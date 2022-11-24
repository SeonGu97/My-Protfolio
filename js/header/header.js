'ues strict';

import Roof from "./roof/roof.js";
import Eaves from "./eaves/eaves.js";

export default class Header {
    constructor(creator, data, loop) {
        loop(creator, data[1], data[0].name);

        const roof = new Roof(creator, data, loop);
        const eaves = new Eaves(creator, data, loop);
    }
}