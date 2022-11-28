'ues strict';

import Btns from "./btns/btns.js";
import BG from "./bg/bg.js";
import Slider from "./slider/slider.js";

export default class Fade {
    constructor(creator, data, loop) {
        loop(creator, data[17], data[0].name);

        const slider = new Slider(creator, data, loop);
        const btns = new Btns(creator, data, loop);
        const bg = new BG(creator, data, loop);
    }
}