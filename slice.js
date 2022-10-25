const testScore = [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]];

// let avg = testScore.map(v=>(v[0]+v[1])/2);
// let sorted = avg.slice().sort((a,b)=>b-a);

function solution(score) {
    let avg = score.map(v=>(v[0]+v[1])/2);
    let sorted = avg.slice().sort((a,b)=>b-a);
    console.log(sorted);
    console.log(avg);
    return avg.map(v=>sorted.indexOf(v)+1);
}
    
console.log(solution(testScore));
console.log(1 % 10);