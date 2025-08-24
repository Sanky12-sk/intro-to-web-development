function countVowels(str) {
    const vowelMatches = str.match(/[aeiouAEIOU]/g);

    return vowelMatches ? vowelMatches.length : 0;
}

const inputString = 'The red and brown fox';
const result = countVowels(inputString);

console.log('Number of vowels in '+inputString+ ':' +result);