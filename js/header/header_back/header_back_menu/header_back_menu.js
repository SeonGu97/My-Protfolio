'use strict';

export default class Header_Back_Menu {
    constructor(creator, data, loop) {
        loop(creator, data[6], data[3].name);
    }
}