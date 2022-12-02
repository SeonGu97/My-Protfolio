'use strict';

export default class Toe {
    constructor(creator, data, loop) {
        loop(creator, data[16], data[15].array);
    }
}