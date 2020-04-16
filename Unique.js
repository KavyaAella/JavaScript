//ES6 implementation

let array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]
const newLocal = Array.from(new Set(array))
console.log(newLocal)
function uniqueArray(array) {
    var hashmap = {};
    var unique = [];
  
    for(var i = 0; i < array.length; i++) {
      // If key returns undefined (unique), it is evaluated as false.
      if(!hashmap.hasOwnProperty(array[i])) {
        hashmap[array[i]] = 1;
        //console.log(hashmap)
        unique.push(array[i]);
        //console.log(unique)
      }
    }
      return unique;
  }
  console.log(uniqueArray(array));