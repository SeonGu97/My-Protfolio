'use strict';

export default class Footer {
    constructor(creator, data, loop) {
        loop(creator, data[19], data[18].array);
    }
}