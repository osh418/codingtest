function solution1(progresses, speeds) {
    var answer = [];
    
    var a = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]))
    
    var index = -1;
    var big = null;
    
    a.forEach((v, i) => {
        if (big < v) {
            big = v;   
            index++;
        }
        if (!answer[index]) {
           answer[index] = 0;
        }    
        if (big !== null) {
            answer[index]++;
        }
    })
    
    return answer;
}

function solution2(progresses, speeds) {
    const answer = [];
    const daysQueue = progresses.map((progress, index) => 
        Math.ceil((100 - progress) / speeds[index])
    );
    
    while (daysQueue.length > 0) {
        const current = daysQueue.shift();
        let count = 1;

        const peek = daysQueue[0];
        
        while (daysQueue.length > 0 && peek <= current) {
            daysQueue.shift();
            count++;
        }
        
        answer.push(count);
    }

    return answer;
}

/**

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

// solution: 5.216ms
console.time('solution1');
console.log(solution1(progresses, speeds));
console.timeEnd('solution1');


// solution:5.301ms
console.time('solution2');
console.log(solution2(progresses, speeds));
console.timeEnd('solution2');

*/