'use strict';

export default class Header_Front_Menu {
    constructor(creator, data, loop) {
        loop(creator, data[5], data[2].name);
    }
}