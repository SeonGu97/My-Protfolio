'use strict';

import Footer from "../footer/footer.js";

export default class Bottom {
    constructor(creator, data, loop) {
        loop(creator, data[18], data[0].array);

        const footer = new Footer(creator, data, loop);
    }
}