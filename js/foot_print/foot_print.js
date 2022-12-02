'use strict';

export default class Foot_Print {
    constructor(creator, data, loop) {
        loop(creator, data[17], data[19].name);
    }
}