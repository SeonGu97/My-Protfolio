'ues strict';

import Creator from "./setting/creator.js";
const creator = Creator;

import { Data } from "./setting/data.js";
const data = Data;

import { Loop } from "./setting/loop.js";
const loop = Loop;

import Header from "./header/header.js";
// import Container from "./container/container.js";

export default class Index {
    constructor(creator, data, loop) {
        loop(creator, data[0], document.body);

        const header = new Header(creator, data, loop);
        // const container = new Container(creator, data, loop);
    }
}

const index = new Index(creator, data, loop);