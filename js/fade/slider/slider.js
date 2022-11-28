'ues strict';

import Slider_Item from "./slider_item/slider_item.js";

export default class Slider {
    constructor(creator, data, loop) {
        loop(creator, data[23], data[17].name);

        const slider_item = new Slider_Item(creator, data, loop);
    }
}