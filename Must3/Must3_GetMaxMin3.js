'use strict'

// 3
// 1で作ったクラスの機能をプロパティのみで実現してください。
// ***メソッドを使わずに最大値と最小値を取得できるようにする
// ***コンストラクタは使ってよい

class GetMaxMin3 {
    constructor(arr) {
        this.arr = arr;
        this.getMax = function(arr) {
            let result = this.arr[0];
            for (const value of this.arr) {
                if (value > result) {
                    result = value;
                }
            }
            return result;
        };

        this.getMin = function(arr) {
            let result = this.arr[0];
            for (const value of this.arr) {
                if (value < result) {
                    result = value;
                }
            }
            return result;
        };
    };

}

module.exports = new GetMaxMin3([1, 2, 3]);


