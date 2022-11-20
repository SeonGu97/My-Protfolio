'ues strict';

import Section from "./section/section.js";

export default class Container {
    constructor(creator, data, loop) {
        loop(creator, data[1], data[0].name);

        const section = new Section(creator, data, loop);

        this.data = data;

        this.number = 0;
        this.boolean = true;

        this.timer = null;
        this.delay = 100;

        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        this.type = null;

        if (isMobile) {
            this.type = '';
        }else {
            this.type = 'wheel';
        }

        window.addEventListener(this.type , e => {
            if(!e.ctrlKey) {
                e.preventDefault()
                
                this.deltaY = e.deltaY;

                clearTimeout(this.timer);

                this.timer = setTimeout(() => {
                        if(!this.data[1].name.classList.contains('lock')) {
                            if(this.deltaY == 100) {
                                if(this.number < this.data[2].array.length - 1) this.number++;
                            }else if(this.deltaY == -100){
                                if(this.number >= 1) --this.number;
                            }
            
                            this.data[2].array[this.number].scrollIntoView({behavior: 'smooth'}, {bottom: 0});
                            this.data[1].name.classList.add('lock');
                            
                            setTimeout(() => {
                                this.data[1].name.classList.remove('lock');
                            }, 500);
                        }
                }, this.delay);
            }else {
                
            }
        }, {passive: false});
    }
}