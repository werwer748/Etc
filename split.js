const a = 10;
const b = 30;

const array = Array.from({length: b - a + 1}, (v, i) => a + i);

// console.log(array);

/*
* const array2 = Array(b - a + 1);
? [ <21 empty items> ]
*/
/*
* const array2 = Array(b - a + 1).fill(10);
? [
?  10, 10, 10, 10, 10, 10, 10,
?  10, 10, 10, 10, 10, 10, 10,
?  10, 10, 10, 10, 10, 10, 10
? ]
*/
/*
* const array2 = Array(b - a + 1).fill(a).map((v, i) => v + i);
? [
?  10, 11, 12, 13, 14, 15, 16,
?  17, 18, 19, 20, 21, 22, 23,
?  24, 25, 26, 27, 28, 29, 30
? ]
*/
const array2 = Array(b - a + 1).fill(a).map((v, i) => v + i);
// console.log(array2);

const hello = "hello"
const slice = hello.split('');
const splice = slice.splice(4, 1);
slice.unshift(splice[0]);
console.log(slice);