function factorial(n) {
    // let result = 1;
    // for (let i = n; i >= 1; i--) {
    //   result = result * i;
    //  }
  
      
    // return result;
    return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(50));
const egin = 5

/*
! 십진수에서 다른 진수로 변환 시킬때는 toString을 사용하면 되고, 다른 진수에서 십진수로 변환시킬때는 parseInt를 사용하면 된다.
*/
console.log(parseInt(egin, 2));
console.log(egin.toString(2));