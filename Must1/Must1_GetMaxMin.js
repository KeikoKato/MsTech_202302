'use strict'

// 1.
// コンストラクタに数値の配列を取り、最大値を取得するメソッド、最小値を取得するメソッドを持つクラスを作成してください。
class GetMaxMin {
    constructor(arr) {
        this.arr = arr;
        console.log(this.arr);
    }

    getMax() {
        let result = this.arr[0];
        for (const value of this.arr) {
            if (value > result) {
                result = value;
            }
        }
        return result;
    }

    getMin() {
        let result = this.arr[0];
        for (const value of this.arr) {
            if (value < result) {
                result = value;
            }
        }
        return result;
    }

};

module.exports = new GetMaxMin([1, 2, 3]);

