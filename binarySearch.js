let arr = [2,3,6,0,9,7,4,5,1,8];
function binarySearch(value, target){
    let max = value.length-1;
    let min =0;
    let middlenum;
    let step =0;
    while(max>=min)
    {
        middlenum = (max+min)/2;
        console.log(middlenum);
        step++;

        if (value[middlenum] == target)
            return`The middle index of the array  $[middlenum}`;
        else
            value[middlenum]>target ? max = middlenum-1 : min = middlenum+1;
             console.log(value[middlenum]);
    }

    //return -1;
}
console.log(binarySearch([1,3,5,7,9,2], 5))