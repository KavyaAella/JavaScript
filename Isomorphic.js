function isIsomorphic(firstString, secondString) {

    if (firstString.length !== secondString.length) return false
  
    let letterMap = {};
  
    for (let i = 0; i < firstString.length; i++) {
      let letterA = firstString[i],
          letterB = secondString[i];
  
      // If the letter does not exist, create a map and map it to the value
      // of the second letter
      if (letterMap[letterA] === undefined) {
        // If letterB has already been added to letterMap, then we can say: they are not isomorphic.
        if(secondString.indexOf(letterB) < i){
            return false;
        } else {
            letterMap[letterA] = letterB;            
        }
      } 
      else if (letterMap[letterA] !== letterB) 
      {
                return false;
      }
    }
  
    return true;
}console.log(isIsomorphic('egg','dgg'));
console.log(isIsomorphic('paper','title'));
console.log(isIsomorphic('sids','kick'));
