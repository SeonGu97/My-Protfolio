'ues strict';

import Bar from "./bar/bar.js";
import Item from "./item/item.js";

export default class Option {
    constructor(creator, data, loop) {
        loop(creator, data[7], data[3].name);
        
        const item = new Item(creator, data, loop);
        const bar = new Bar(creator, data, loop);
    }
}