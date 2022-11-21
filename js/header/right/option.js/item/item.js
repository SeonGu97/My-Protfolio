'ues strict';

export default class Item {
    constructor(creator, data, loop) {
        loop(creator, data[8], data[7].name);
    }
}