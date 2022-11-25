'ues strict';

import Creator from "./setting/creator.js";
const creator = Creator;

import { Data } from "./setting/data.js";
const data = Data;

import { Loop } from "./setting/loop.js";
const loop = Loop;

import Header from "./header/header.js";
import Aside from "./aside/aside.js";
import Container from "./container/container.js";
import Roof_tile from "./roof_tile/roof_tile.js";

export default class Index {
    constructor(creator, data, loop) {
        loop(creator, data[0], document.body);

        const header = new Header(creator, data, loop);
        const aside = new Aside(creator, data, loop);
        const container = new Container(creator, data, loop);
        const roof_tile = new Roof_tile(creator, data, loop);
    }
}

const index = new Index(creator, data, loop);