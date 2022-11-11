'ues strict';

import Creator from "./creator.js";
const creator = Creator;

import { Data } from "./data.js";
const data = Data;

import { Loop } from "./loop.js";
const loop = Loop;


export default class Index {
    constructor(creator, data, loop) {
        loop(creator, data[0], document.body);
    }
}

const index = new Index(creator, data, loop);