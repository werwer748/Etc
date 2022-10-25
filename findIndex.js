const ary = [1, 2, 3, 4, 5, 6, 7];
const sort = [...ary].sort((a, b) => b - a);

// console.log({
//     ary,
//     sort,
// })

const find = sort.findIndex((v) => {console.log(v); return v === 6});
console.log(find);
const emergency = [30, 10, 23, 6, 100];

function solution(emergency) {
    var answer = [];
    const order = [...emergency].sort((a,b) => b-a);
    //76, 24, 3
    emergency.map((v, i) => {
        /*
        * findIndex로 몇번째에 찾았는지 -> 순서의 인덱스를 가져와서 -> 원본 배열의 인덱스랑 매치 -> answer로 리턴
        */
        answer[i] = order.findIndex(fv => fv === v) + 1;
    });
    return answer;
}
