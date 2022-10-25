const bb = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];

function solution(babbling) {
    const convertPWordsToNum = word => {
        const pWords = ['aya', 'ye', 'woo', 'ma'];
        return pWords.reduce((result, pWord, i) => result.replaceAll(pWord, i), word);
        // return pWords.reduce((result, pWord, i) => {console.log({result, pWord})}, word);
    };
    // return convertPWordsToNum('yemawoo');
    const canPronounce = word => {
      const result = convertPWordsToNum(word);
      console.log({ result });  //                                   1        2               1   1
      return !/[^\d]/.test(result) && [...result].every((num, i) => i + 1 > result.length || num !== result[i + 1]);
    };

    return canPronounce('yeye');

    // return babbling.filter(b => canPronounce(b)).length;
}

console.log(solution(bb));

const num = '132'
const every = [...num];//.every((num, i) => console.log(num));
// console.log(every);