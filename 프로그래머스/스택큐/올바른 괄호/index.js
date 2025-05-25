// 풀이 1
const OPEN = '(';
const CLOSE = ')';

function solution(s) {
    var answer = true;

    var openIndex = [];

    for (var i = 0; i < s.length; i++) {
        if (s[i] === OPEN) {
            if (i === s.length - 1) {
                answer = false;
                break;
            }
            openIndex.push(i);
        } else if (s[i] === CLOSE) {
            if (openIndex.length <= 0) {
                answer = false;
                break;
            }
            openIndex.pop();
        }
    }

    return answer;
}

// 풀이2