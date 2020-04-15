let arr = [1, 4, 5, 7]
const cumulativeSum = list =>{
    let result = [list[0]];
    for(let i=1;i<arr.length;i++){
        result.push(list[i] + result[i-1]);
    } 
    
    return result;
  }
  console.log(cumulativeSum(arr));

