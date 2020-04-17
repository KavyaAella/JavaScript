// For the non-zero case:
const isPowerOfTwo=(number)=>
 {
   return number & (number - 1) === 0;
}

// For zero-case:
function isPowerOfTwoZeroCase(number) {
  return (number !== 0) && ((number & (number - 1)) === 0);
}

console.log(isPowerOfTwo(64)); // true
