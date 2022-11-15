'use strict';

import Header_Front from "./header_front/header_front.js";
import Header_Back from "./header_back/header_back.js";
import Bar from "./bar/bar.js";

export default class Header {
    constructor(creator, data, loop) {
        loop(creator, data[1], data[0].name);

        const header_front = new Header_Front(creator, data, loop);
        const header_back = new Header_Back(creator, data, loop);
        const bar = new Bar(creator, data, loop);
    }
}