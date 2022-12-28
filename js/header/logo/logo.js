'ues strict';

export default class Logo {
    constructor(creator, data, loop) {
        loop(creator, data[3], data[1].name);
    }
}