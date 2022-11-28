'ues strict';

import BG_Item from "./bg_item/bg_item.js";

export default class BG {
    constructor(creator, data, loop) {
        loop(creator, data[21], data[17].name);

        const bg_item = new BG_Item(creator, data, loop);

        this.num = 0;

        this.num2 = 2;

        data[19].name.addEventListener('click', e => {
            this.num--;
            this.num2--;

            data[18].name.style.pointerEvents = 'none';

            if(this.num <= -1) {
                this.num = data[22].array.length - 1;
            }

            this.remove(data);

            data[22].array[this.num].style.opacity = 1;
            data[22].array[this.num].style.zIndex = 5;

            data[23].name.style.transition = '.4s ease-in-out';

            data[23].name.style.transform = `translateX(-${(80 * this.num2) + ((this.num2 - 2) * 5)}%)`;
        });

        data[20].name.addEventListener('click', e => {
            this.num++;
            this.num2++;

            data[18].name.style.pointerEvents = 'none';

            if(data[22].array.length <= this.num) {
                this.num = 0;
            }

            this.remove(data);

            data[22].array[this.num].style.opacity = 1;
            data[22].array[this.num].style.zIndex = 5;

            data[23].name.style.transition = '.4s ease-in-out';

            data[23].name.style.transform = `translateX(-${(80 * this.num2) + ((this.num2 - 2) * 5)}%)`;
        });

        data[23].name.addEventListener('transitionend', e => {
            if(data[22].array.length + 2 <= this.num2) {
                data[23].name.style.transition = 'none';
                this.num2 = 2;
                data[23].name.style.transform = `translateX(-${(80 * this.num2) + ((this.num2 - 2) * 5)}%)`;
            }

            if(this.num2 <= 1) {
                data[23].name.style.transition = 'none';
                this.num2 = 6;
                data[23].name.style.transform = `translateX(-${(80 * this.num2) + ((this.num2 - 2) * 5)}%)`;
            }

            data[18].name.style.pointerEvents = 'auto';
        });
    }
    
    remove(data) {
        data[22].array.forEach(element => {
            element.style.opacity = 0;
            element.style.zIndex = 0;
        });
    }
}