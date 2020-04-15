let array = [2, 5, 1, 4, 8, 6, 3,0]
let upBound = 8,
loBound = 1;

const findMissNum = (array,upBound,loBound)=>{
    let sumOfInt =0;
    for(let i=0;i<array.length;i++){
        sumOfInt +=array[i];
    }
    upperLimitSum = (upBound * (upBound + 1)) / 2;
  lowerLimitSum = (loBound * (loBound - 1)) / 2;
  Sum = upperLimitSum-lowerLimitSum;

  return Sum -sumOfInt
}
console.log(findMissNum(array,upBound,loBound))