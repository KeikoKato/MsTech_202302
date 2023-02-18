'use strict'

// 4
// 1で作ったクラスを継承したクラスを別名で２つ作成せよ。
// 片方にはコンストラクタで設定した数値型の配列の中央値を取得するメソッドを追加せよ。
// もう片方には、コンストラクタで設定した数値型の配列の昇順ソートした結果を返すメソッドを追加せよ。

class GetMaxMin {
    constructor(arr) {
        this.arr = arr;
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


class SortAsc extends GetMaxMin {
    constructor(arr) {
        super(arr);
    };

    sortAsc(arr) {
        // let result = [];
        function compareFn(a, b) {
            if (a - b > 0) {
                return 1;
            } else if (a - b < 0) {
                return -1;
            } else {
                return 0;
            }
        };
        this.arr.sort(compareFn);
        return this.arr;
    };
};

exports.sortAsc = new SortAsc([23, 7, 4, 72, 169]);


class GetMedian extends GetMaxMin {
    constructor(arr) {
        super(arr);
    };

    sortAsc(arr) {
        function compareFn(a, b) {
            if (a - b > 0) {
                return 1;
            } else if (a - b < 0) {
                return -1;
            } else {
                return 0;
            }
        };
        this.arr.sort(compareFn);
        return this.arr;
    };

    getMedian(arr) {
        let result = 0;            
        this.sortAsc();
        if (this.arr.length % 2 === 0) {  
            let half = this.arr.length / 2;
            result = (this.arr[half] + this.arr[half - 1]) / 2;
            return result;
        } else {
            let half = Math.floor(this.arr.length / 2);
            result = this.arr[half];
            return result;
        }            
    };
};

exports.getMedian1 = new GetMedian([23, 7, 4, 72, 169]);
exports.getMedian2 = new GetMedian([23, 4, 72, 169]);

