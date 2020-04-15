let arr;
arr = [3,1,0,8,5,6,2,5,4,10,7,9];

const findSumPairs = (arr,value) =>{
    let sumlookups ={};
    let output =[];
    for(i=0;i<arr.length;i++){
        let trgtvalue = value -arr[i]
        if(sumlookups[trgtvalue]){
            console.log(sumlookups)
            output.push(arr[i],trgtvalue)
            console.log(output)
        }
        sumlookups[arr[i]] = true
    }
    return output;
}
findSumPairs(arr, 10)
