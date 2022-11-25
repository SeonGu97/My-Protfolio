'ues strict';

import Main from "./main/main.js";

export default class Container {
    constructor(creator, data, loop) {
        loop(creator, data[13], data[0].name);

        const main = new Main(creator, data, loop);
    }
}