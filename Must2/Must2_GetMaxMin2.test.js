'use strict'

const getMN = require('./Must2_GetMaxMin2.js');

describe('GetMaxMin2', () => {

    test('[1, 2, 3]の最大値は3', () => {
        const result = getMN.getMax([1, 2, 3]);
        expect(result).toBe(3);
    });

    test('[1, 2, 3]の最小値は1', () => {
        const result = getMN.getMin([1, 2, 3]);
        expect(result).toBe(1);
    });

})


