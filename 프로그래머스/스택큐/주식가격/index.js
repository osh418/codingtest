function solution1(prices) {
    return prices.map((price, i) => {
        for (let j = i + 1; j < prices.length; j++) {
            if (price > prices[j]) return j - i;
        }
        return prices.length - i - 1;
    });
}


function solution2(prices) {
    let answers = new Array(prices.length).fill(0);
    let idxStack = [];
    let n = prices.length;

    for (let index = 0; index < n; index++) {
        let price = prices[index];
        while (
            idxStack.length > 0 &&
            price < prices[idxStack[idxStack.length - 1]]
        ) {
            let targetIdx = idxStack.pop();
            let answer = index - targetIdx;
            answers[targetIdx] = answer;
        }
        idxStack.push(index);
    }

    while (idxStack.length > 0) {
        let targetIdx = idxStack.pop();
        let answer = (n - 1) - targetIdx;
        answers[targetIdx] = answer;
    }

    return answers;
}

// console.log(solution([1, 2, 3, 2, 3]));
const prices = Array.from({ length: 100000 }, (_, i) => i + 1).concat(Array.from({ length: 100000 }, (_, i) => i + 1)).concat(Array.from({ length: 100000 }, (_, i) => i + 1)).concat(Array.from({ length: 100000 }, (_, i) => i + 1));

// solution1: 11.568s
console.time('solution1');
console.log(solution1(prices));
console.timeEnd('solution1');

// solution2: 7.953ms
console.time('solution2');
console.log(solution2(prices));
console.timeEnd('solution2');