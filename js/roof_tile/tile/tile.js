'ues strict';

export default class Tile {
    constructor(creator, data, loop) {
        loop(creator, data[16], data[15].name);
    }
}