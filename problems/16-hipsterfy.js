/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    let vowels = "aeiouAEIOU";
    let lastVowelIndex = -1;

    // Find the index of the last vowel in the word
    for (let i = word.length - 1; i >= 0; i--) {
      if (vowels.includes(word[i])) {
        lastVowelIndex = i;
        break;
      }
    }

    // Remove the last vowel by slicing the word
    return lastVowelIndex !== -1 ? word.slice(0, lastVowelIndex) + word.slice(lastVowelIndex + 1) : word;
  };

  let hipsterfy = function(sentence) {
    // Split the sentence into words, hipsterfy each word, and then join them back into a sentence
    return sentence.split(' ').map(removeLastVowel).join(' ');
  };

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
