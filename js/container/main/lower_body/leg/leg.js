'use strict';

export default class Leg {
    constructor(creator, data, loop) {
        loop(creator, data[12], data[11].array);
    }
}