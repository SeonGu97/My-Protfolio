'use strict';

export default class Eyes {
    constructor(creator, data, loop) {
        loop(creator, data[21], data[20].name);
    }
}