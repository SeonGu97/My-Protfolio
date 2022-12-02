'use strict';

export default class Tail {
    constructor(creator, data, loop) {
        loop(creator, data[13], data[11].array);
    }
}