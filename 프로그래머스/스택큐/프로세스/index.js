function solution(priorities, location) {
    let answer = 0;
    let queue = [];
    for (let i = 0; i < priorities.length; i++) {
        queue.push({
            index: i,
            priority: priorities[i]
        });
    }
    while (queue.length > 0) {
        let current = queue.shift();
        if (queue.some(item => item.priority > current.priority)) {
            queue.push(current);
        } else {
            answer++;
            if (current.index === location) {
                return answer;
            }
        }
    }

    return answer;
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5