'use strict'

const sortMedian = require('./Must4_GetMaxMin4.js');

describe('Sort_Median', () => {

    test('[23, 7, 4, 72, 169]を昇順ソート', () => {
        const result = sortMedian.sortAsc.sortAsc();
        expect(result).toStrictEqual([4, 7, 23, 72, 169]);
    });

    test('[23, 7, 4, 72, 169]の中央値は23', () => {
        const result = sortMedian.getMedian1.getMedian();
        expect(result).toBe(23);
    });

    test('[23, 4, 72, 169]の中央値は47.5', () => {
        const result = sortMedian.getMedian2.getMedian();
        expect(result).toBe(47.5);
    });

})
