'ues strict';

import Left from "./left/left.js";
import Right from "./right/right.js";

export default class Header {
    constructor(creator, data, loop) {
        loop(creator, data[1], data[0].name);

        const left = new Left(creator, data, loop);
        const right = new Right(creator, data, loop);
    }
}