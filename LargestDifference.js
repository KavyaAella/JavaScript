let array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
function findLargestDiff(array){
if(array.length<=1) return -1
let currentMin =array[0];
let currentMaxDiff = 0;
for (let i = 1; i < array.length; i++) {
    if (array[i] > currentMin && (array[i] - currentMin > currentMaxDiff)) {
      currentMaxDiff= array[i] - currentMin;
    } else if (array[i] <= currentMin) {
      currentMin = array[i];
    }
  }

  // If negative or 0, there is no largest difference
  if (currentMaxDiff <= 0) return -1;

return currentMaxDiff;
}
console.log(findLargestDiff(array));
