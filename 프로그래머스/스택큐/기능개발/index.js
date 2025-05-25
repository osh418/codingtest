function solution(progresses, speeds) {
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