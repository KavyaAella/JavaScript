const arr = [1,4,5,7,9,13,153];
const findMaxMin = (arr) =>{
    let max =arr[0];
    let min =arr[0];

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        max = arr[i];
        else if(arr[i]<min)
        min = arr[i];
        }
        return {
            "max": max,
            "min": min
          };
}
console.log(findMaxMin(arr));