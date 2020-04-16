isPalindrome("racecar"); // true
isPalindrome("race Car"); // true

function isPalindrome(word) {

  let lettersOnly = word.toLowerCase().replace(/\s/g, "");


  return lettersOnly === lettersOnly.split("").reverse().join("");
}
console.log(isPalindrome("racecar"))