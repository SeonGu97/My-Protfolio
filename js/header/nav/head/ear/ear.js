'use strict';

export default class Ear {
    constructor(creator, data, loop) {
        loop(creator, data[9], data[7].name);
    }
}