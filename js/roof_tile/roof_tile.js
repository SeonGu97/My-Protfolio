'ues strict';

import Tile from "./tile/tile.js";

export default class Roof_tile {
    constructor(creator, data, loop) {
        loop(creator, data[15], data[0].name);

        const tile = new Tile(creator, data, loop);
    }
}