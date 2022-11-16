'use strict';

export default class Sun {
    constructor(creator, data, loop) {
        loop(creator, data[11], data[8].name);
    }
}