'use strict';

export default class Arm {
    constructor(creator, data, loop) {
        loop(creator, data[10], data[7].name);
    }
}