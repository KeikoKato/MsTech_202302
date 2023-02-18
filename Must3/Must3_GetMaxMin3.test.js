'use strict'

const getMN = require('./Must3_GetMaxMin3.js');

describe('GetMaxMin3', () => {

    test('[1, 2, 3]の最大値は3', () => {
        const result = getMN.getMax();
        expect(result).toBe(3);
    });

    test('[1, 2, 3]の最小値は1', () => {
        const result = getMN.getMin();
        expect(result).toBe(1);
    });

})
