const numbers = "1 2 Z Z Z Z 3";

function solution(s) {
    var answer = 0;
    const arr = s.split(' ');
    while (arr.includes('Z')) arr.splice(arr.indexOf('Z') - 1, 2);
    return arr// .map(n => +n).reduce((a, c) => a + c, 0);
}

console.log(solution(numbers));