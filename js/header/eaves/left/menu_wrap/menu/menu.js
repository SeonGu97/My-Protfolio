'ues strict';

export default class Menu {
    constructor(creator, data, loop) {
        loop(creator, data[6], data[5].name);
    }
}