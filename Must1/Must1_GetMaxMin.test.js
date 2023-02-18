'use strict'

const instance = require('./Must1_GetMaxMin.js');

describe('GetMaxMin', () => {

    test('[1, 2, 3]の最大値は3', () => {
        const result = instance.getMax();
        expect(result).toBe(3);
    });

    test('[1, 2, 3]の最小値は1', () => {
        const result = instance.getMin();
        expect(result).toBe(1);
    });

})
