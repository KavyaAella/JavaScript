function isBalanced(expression) {
    let checkString = expression
     stack = [];
  
    // If empty, parentheses are technically balanced
    if (checkString.length <= 0) return true;
  
    for (let i = 0; i < checkString.length; i++) {
      if(checkString[i] === '{') {
        stack.push(checkString[i]);
      } else if (checkString[i] === '}') {
        // Pop on an empty array is undefined
        if (stack.length > 0) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  
    // If the array is not empty, it is not balanced
    if (stack.pop()) return false;
    return true;
  }
  console.log(isBalanced('{{}}{{}'));