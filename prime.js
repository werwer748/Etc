function primeFactors(n){
    while (n%2 == 0) {
        console.log(2);
        n = n/2
    }
    // 이제 n은 홀수 -> 이미 2의 배수를 판별했기때문에 2씩 증가시킬 수 있음
    for (var i=3;i*i <= n;i=i+2) {
        while (n%i==0) {
            console.log('while', i)
            n = n/i
        }
    }
    if (n>2) {
        console.log('if', n)
    }
}

// console.log(primeFactors(420));

//? 위 개념 이해가 어려울시 - 소인수 분해
let pFactors = [];
const factor = (n) => {
for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      pFactors = [...pFactors, i];
      n /= i;
    }
}
}


//? 최대 공약수
const getGCD = (a, b) => {
    let gcd = 1;
    for (let i = 1; i <= Math.min(a, b); i++) {
      if (a % i === 0 && b % i === 0) gcd = i;
    }
    return gcd;
};
// console.log('???', 420 % 9)

console.log('메스확인', Math.floor(11/2));
