'ues strict';

export default class Aside {
    constructor(creator, data, loop) {
        loop(creator, data[10], data[0].name);
    }
}