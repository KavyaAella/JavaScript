let arr =[5,1,6,2,4,3]

const insertingSort =(array,length)=>{
    let i,j,key;
    for(i=1;i<array.length;i++)
    {
        j=i;
        while(j>0 && array[j-1]>array[j])
        {
            key = array[j];
            array[j] = array[j-1];
            array[j-1] = key;
            j--
         }
         
    }
    printarray(array)
}
function printarray(ar){
    for(let j=0;j<ar.length;j++){
        console.log(ar[j])
    }
}
console.log(insertingSort(arr,6))