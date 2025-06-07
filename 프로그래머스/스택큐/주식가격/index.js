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

function solution3(prices) {
    const n = prices.length;
    const answer = new Array(n).fill(0);

    for (let i = n - 2; i >= 0; i--) {
        let j = i + 1;
        // 다음 가격이 더 크거나 같으면, 정답을 더해서 jump
        while (j < n && prices[i] <= prices[j]) {
            // 미리 계산된 값을 활용해 건너뛰기
            if (answer[j] === 0) {
                j++; // 더 이상 점프할 곳이 없음
            } else {
                j += answer[j];
            }
        }
        answer[i] = j - i;
    }

    return answer;
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

// solution3: 4.111ms
console.time('solution3');
console.log(solution3(prices));
console.timeEnd('solution3');