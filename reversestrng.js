let string = "Welcome to this Javascript Guide!";

let reverseEntireSentence = reverseBySeparator(string, "");

let reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
console.log(reverseEachWord);