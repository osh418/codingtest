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
        let answer = n - 1 - targetIdx;
        answers[targetIdx] = answer;
    }

    return answers;
}

function solution3(prices) {
    const n = prices.length;
    const lastIndex = n - 1;
    const answer = Array(n);
    answer[lastIndex] = 0; // last is 0 (no more prices element)

    for (let currentIdx = lastIndex - 1; currentIdx >= 0; currentIdx--) {
        let dropPointCursorIdx = currentIdx + 1;

        function jumpCursor(jumpWith) {
            dropPointCursorIdx += jumpWith;
        }

        while (true) {
            let isValidIndex = dropPointCursorIdx < n;
            if (!isValidIndex) break;

            let isPriceDropped =
                prices[currentIdx] > prices[dropPointCursorIdx];
            if (isPriceDropped) break;

            let isNotAnymoreDropNextValue = answer[dropPointCursorIdx] === 0;
            if (isNotAnymoreDropNextValue) {
                dropPointCursorIdx = n;
                break;
            }

            let jump = answer[dropPointCursorIdx];
            jumpCursor(jump);
        }

        let isCursorOutRange = dropPointCursorIdx > lastIndex;
        if (isCursorOutRange) {
            answer[currentIdx] = lastIndex - currentIdx;
        } else {
            answer[currentIdx] = dropPointCursorIdx - currentIdx;
        }
    }

    return answer;
}

/**

const prices = Array.from({ length: 100000 }, (_, i) => (i + 1))
    .concat(Array.from({ length: 100000 }, (_, i) => i + 1))
    .concat(Array.from({ length: 100000 }, (_, i) => i + 1))
    .concat(Array.from({ length: 100000 }, (_, i) => i + 1));

// solution1: 11.568s
console.time('solution1');
console.log(solution1(prices));
console.timeEnd('solution1');

// solution2: 7.953ms
console.time('solution2');
console.log(solution2(prices));
console.timeEnd('solution2');

// solution3: 8.259ms
console.time('solution3');
console.log(solution3(prices));
console.timeEnd('solution3');

*/

/**
const prices = Array.from({ length: 1000000 }, (_, i) => (i + 1) % 3);

// solution1: 1:36.975 (m:ss.mmm)
console.time('solution1');
console.log(solution1(prices));
console.timeEnd('solution1');

// solution2: 16.976ms
console.time('solution2');
console.log(solution2(prices));
console.timeEnd('solution2');

// solution3: 15.255ms
console.time('solution3');
console.log(solution3(prices));
console.timeEnd('solution3');

 */