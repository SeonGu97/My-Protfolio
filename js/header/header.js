'ues strict';

import Band from './band/band.js';
import Logo from './logo/logo.js';

export default class Header {
    constructor(creator, data, loop) {
        loop(creator, data[1], data[0].name);

        const band = new Band(creator, data, loop);
        const logo = new Logo(creator, data, loop);
    }
}