'use strict'

// 2
// 1で作った各メソッドを、インスタンス化なしで呼び出せる静的メソッドにせよ。
// ただし、メソッドの引数に数値の配列を取るものとする。
class GetMaxMin2 {

    static getMax(arr) {
        let result = arr[0];
        for (const value of arr) {
            if (value > result) {
                result = value;
            }
        }
        return result;
    }

    static getMin(arr) {
        let result = arr[0];
        for (const value of arr) {
            if (value < result) {
                result = value;
            }
        }
        return result;
    }
}

module.exports = GetMaxMin2;

