function solution1(arr)
{
    var answer = [];
    
    answer = arr.filter((v, i) => arr[i-1] !== v)
    
    return answer;
}

function solution2(arr)
{
    var stack = [];
    
    for (let i = 0; i < arr.length; i++) {
        const peek = stack[stack.length - 1];
        if (peek !== arr[i]) {
            stack.push(arr[i]);
        }
    }
    
    return stack;
}

/**
const arr = [1, 1, 3, 3, 0, 1, 1];
// solution1: 5.186ms
console.time('solution1');
console.log(solution1(arr));
console.timeEnd('solution1');

// solution2: 0.063ms
console.time('solution2');
console.log(solution2(arr));
console.timeEnd('solution2');
*/

/**
const arr = [4,4,4,3,3];
// solution1: 4.957ms
console.time('solution1');
console.log(solution1(arr));
console.timeEnd('solution1');

// solution2: 0.063ms
console.time('solution2');
console.log(solution2(arr));
console.timeEnd('solution2');
*/

/**
const arr = Array.from({ length: 100000 }, (_, i) => (i + 1) % 2);
// solution1: 6.996ms
console.time('solution1');
console.log(solution1(arr));
console.timeEnd('solution1');

// solution2: 1.751ms
console.time('solution2');
console.log(solution2(arr));
console.timeEnd('solution2');
*/
