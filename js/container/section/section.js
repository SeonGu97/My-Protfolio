'ues strict';

export default class Section {
    constructor(creator, data, loop) {
        loop(creator, data[2], data[1].name);
    }
}