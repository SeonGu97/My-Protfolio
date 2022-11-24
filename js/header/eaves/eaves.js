'ues strict';

import Left from "./left/left.js";
import Right from "./right/right.js";

export default class Eaves {
    constructor(creator, data, loop) {
        loop(creator, data[12], data[1].name);

        const left = new Left(creator, data, loop);
        const right = new Right(creator, data, loop);
    }
}