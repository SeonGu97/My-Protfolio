'use strict';

export default class Text {
    constructor(creator, data, loop) {
        loop(creator, data[5], data[4].array);

        data[5].array.forEach((element, index) => {
            const array = ['K', 'S', 'G', '\u00a0'];

            element.innerText = array[index];
        });

        // console.log(data[5].name.style.color = 'transparent')
    }
}