'ues strict';

import Creator from "./setting/creator.js";
const creator = Creator;

import { Data } from "./setting/data.js";
const data = Data;

import { Loop } from "./setting/loop.js";
const loop = Loop;

import Header from "./header/header.js";
import Container from "./container/container.js";
import Foot from "./foot/foot.js";
import Foot_Print from "./foot_print/foot_print.js";
import Bottom from "./bottom/bottom.js";
import Face from "./face/face.js";

export default class Index {
    constructor(creator, data, loop) {
        loop(creator, data[0], document.body);

        const header = new Header(creator, data, loop);
        const container = new Container(creator, data, loop);
        const bottom = new Bottom(creator, data, loop);
        const foot_print = new Foot_Print(creator, data, loop);
        const foot = new Foot(creator, data, loop);
        const face = new Face(creator, data, loop);
    }
}

const index = new Index(creator, data, loop);