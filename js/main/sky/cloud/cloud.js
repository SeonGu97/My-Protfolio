'use strict';

export default class Cloud {
    constructor(creator, data, loop) {
        loop(creator, data[13], data[12].name);
    }
}