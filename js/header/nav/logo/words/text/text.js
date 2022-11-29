'use strict';

export default class Text {
    constructor(creator, data, loop) {
        loop(creator, data[5], data[4].array);

        data[5].array.forEach((element, index) => {
            const array = ['K', 'S', 'G'];

            element.innerText = array[index];
        });
    }
}