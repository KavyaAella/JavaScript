const arr = [1,3,2,3,4,5,5,6];
console.log(arr1);
const removedupes = (arr)=>{
    let result =[];
    let previous = arr[0]
    result[0] = previous; 
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=previous){
            result.push(arr[i]);
        }
        previous = arr[i];
    }
    return result;

}
console.log(removedupes(arr));