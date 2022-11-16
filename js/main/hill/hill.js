'use strict';

export default class Hill {
    constructor(creator, data, loop) {
        loop(creator, data[10], data[9].name);
    }
}