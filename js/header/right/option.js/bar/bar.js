'ues strict';

export default class Bar {
    constructor(creator, data, loop) {
        loop(creator, data[9], data[3].name);

        this.data = data;
        this.array = [3, 2, 1];

        this.data[9].name.addEventListener('click', e => {
            this.target = e.currentTarget;

            this.target.classList.toggle('active');

            if(this.target.classList.contains('active')) {
                for(let i = 3; i < this.data[8].array.length; i++) {
                    this.data[8].array[i].animate(
                        {transform: `translateY(${i - 2}${i - 2}0%)`},
                        {fill: 'both', duration: (i - 2) * 100, delay: (i - 2) * 200}
                    );
                }
            }else {
                for(let i = 5; i > 2; i--) {
                    this.data[8].array[i].animate(
                        {transform: 'translateY(0)'},
                        {fill: 'both', duration: this.array[i - 3] * 100, delay: this.array[i - 3] * 200}
                    );
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

                for(let i = 5; i > 2; i--) {
                    this.data[8].array[i].animate(
                        {transform: 'translateY(0)'},
                        {fill: 'both', duration: this.array[i - 3] * 100, delay: this.array[i - 3] * 200}
                    );
                }
            }
        }
    }
}