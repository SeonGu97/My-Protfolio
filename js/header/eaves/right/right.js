'ues strict';

import Option from "./option.js/option.js";

export default class Right {
    constructor(creator, data, loop) {
        loop(creator, data[3], data[12].name);

        const option = new Option(creator, data, loop);
    }
}