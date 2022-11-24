'ues strict';

export default class Bar {
    constructor(creator, data, loop) {
        loop(creator, data[9], data[3].name);

        this.data = data;

        this.data[9].name.addEventListener('click', e => {
            this.target = e.currentTarget;

            this.target.classList.toggle('active');

            if(this.target.classList.contains('active')) {
                for(let i = 3; i < data[8].array.length; i++) {
                    this.data[8].array[i].style.transform = `translateY(${i - 1}${(i - 3) * 3}0%)`;
                    this.data[8].array[i].style.transitionDelay = `.${(i - 3) * 2}s`;
                }
            }else {
                this.array = [2, 1, 0];

                for(let i = 5; i > 2; i--) {
                    this.data[8].array[i].style.transform = `translateY(0%)`;
                    this.data[8].array[i].style.transitionDelay = `.${this.array[i - 3] * 2}s`;
                }
            }
        });

        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
    }

    resize() {
        const desktop = matchMedia('all and (max-width: 1024px)').matches;

        if(!desktop) {
            if(this.data[9].name.classList.contains('active')) {
                this.data[9].name.classList.remove('active')

                this.array = [2, 1, 0];

                for(let i = 5; i > 2; i--) {
                    this.data[8].array[i].style.transform = `translateY(0%)`;
                    this.data[8].array[i].style.transitionDelay = `.${this.array[i - 3] * 2}s`;
                }
            }
        }
    }
}