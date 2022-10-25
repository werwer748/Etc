function solution(N) {
    //초시계 시작
    // for(answer=1; answer<=N; answer++)
    //     if(answer*6%N==0){
    //         //초시계 종료
    //         break;
    //     }
    //시간 출력
    //초시계 시작
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b); // 최대공약수
    var answer = N/gcd(N, 6);
    //초시계 종료
    //시간 출력
}

let start = new Date();
solution(90000000000);
let end = new Date();
console.log(end-start);