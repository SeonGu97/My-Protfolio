'ues strict';

export default class Container {
    constructor(creator, data, loop) {
        loop(creator, data[2], data[0].name);
    }
}