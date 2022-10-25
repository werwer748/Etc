function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const [aDiff, bDiff] = [Math.abs(a - n), Math.abs(b - n)];
        console.log(aDiff, bDiff)
        if (aDiff === bDiff) return b - a;
        return aDiff - bDiff;
    });
}

/*
* 어떤 수 기준으로 정렬할때 그 수를 뺀 값들로 솔트를 해준다.
? return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
? 위의 식 기억해두기
*/