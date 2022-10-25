const A = 'hello';
const B = 'ohell';
const C = 'esignatur' + 'esignatur';

function solution(A, B) {
    var answer = -1;
    const a = A.split('');
    const b = B.split('');
    console.log(a.join(''), b.join(''));
    for (i=a.length - 1; i<=0; i++) {
        if (a.join('') === b.join('')) {
            return answer = a.length - i;
            
        }
        let move = a.splice(i, 1);
        a.unshift(move);
    }
    return answer;
};
const a = A.split('');
// console.log(a.join(''));
console.log(A.slice(-1), A.slice(0,-1));