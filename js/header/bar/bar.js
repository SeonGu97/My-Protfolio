'use strict';

export default class Bar {
    constructor(creator, data, loop) {
        loop(creator, data[7], data[1].name);
    }
}