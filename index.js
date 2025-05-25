function solution(arr)
{
    var answer = [];
    
    arr.forEach((v,i)=>{
        if(v !== arr[i+1])
        {
            answer.push(v);
        }
    })
    
    console.log(answer);
    return answer;
}

solution([1,1,3,3,0,1,1]);