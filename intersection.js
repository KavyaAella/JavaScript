let firstArray = [2, 2, 4, 1];
let secondArray = [1, 2, 0, 2];


function intersection(firstArray, secondArray) {
    let hashmap = {};
  let intersectionArray = [];

  firstArray.forEach((element) => {
    hashmap[element] = 1;
    console.log(hashmap)
  });



  secondArray.forEach(function(element) {
    if (hashmap[element] === 1) {
      intersectionArray.push(element);
      hashmap[element]++;
    }
  });

  return intersectionArray;
}
console.log(intersection(firstArray,secondArray))