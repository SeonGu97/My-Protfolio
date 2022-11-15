'use strict';

export default class Logo {
    constructor(creator, data, loop) {
        loop(creator, data[4], data[2].name);
    }
}