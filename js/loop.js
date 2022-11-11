'use strict';

export const Loop = (creator, data, parent) => {
    const boolean = Array.isArray(parent);

    for(let i = 0; i < data.number; i++) {
        if(boolean) {
            parent.forEach(element => {
                new creator(data, element, i);
            })
        }else {
            new creator(data, parent, i);
        }
    }
}