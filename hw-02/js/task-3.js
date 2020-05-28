const findLongestWord = function(string) {
    const wordArray = string.split(" ");
    let longestWord = wordArray[0];
    for (let i = 1; i < wordArray.length; i += 1) {
      if (longestWord.length < wordArray[i].length) {
        longestWord = wordArray[i];
      }
    }
    return longestWord;
  };
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  
  console.log(findLongestWord('Google do a roll'));
  
  console.log(findLongestWord('May the force be with you'));