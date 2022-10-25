const ary = [30, 10, 23, 6, 100];

console.log(Math.max(...ary));
console.log([...ary].splice(0, 1));
console.log(ary);

//? sort도 원본 배열이 바뀜
const sort = [...ary].sort((a,b) => b-a);
//! 이런식으로 바꿔야 원본은 유지됨.
console.log(sort);
console.log(ary);
