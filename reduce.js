const ten = Array.from({length: 10}, (v, i) => i + 1).sort((a, b) => b - a);

console.log(ten.reduce((prev, next) => prev*next, ten[0]));