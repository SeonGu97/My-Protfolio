'use strict';

export default class Creator {
    constructor(data, parent, i) {
        this.data = data;
        this.parent = parent;

        this.create()
        .then(element => this.attrs(element))
        .then(element => this.append(element))

        if(this.data.text.length > 0) {
            this.data.name.innerHTML = this.data.text[i];
        }
    }

    async create() {
        this.data.name = document.createElement(this.data.element);

        this.data.array.push(this.data.name);

        return await this.data.name;
    }

    async attrs(element) {
        for(let i = 0; i < this.data.type.length; i++) {
           element.setAttribute(this.data.type[i], this.data.value[i]);
        }

        return await element;
    }

    async append(element) {
        await this.parent.appendChild(element);

        return element;
    }
}