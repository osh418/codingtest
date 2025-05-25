function solution(arr)
{
    var answer = [];
    
    answer = arr.filter((v, i) => arr[i-1] !== v)
    
    return answer;
}