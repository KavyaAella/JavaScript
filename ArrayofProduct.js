let unsorted = [-10, 7, 29, 30, 5, -10, -70]
 
function sortedInteger(a,b){
    return a-b;
}
const ComputeIntegers = (unsorted)=>{
    let sorted = unsorted.sort(sortedInteger),
    product1 = 1,
    product2 = 1,
    arraylen = sorted.length-1;
    console.log(sorted );
    console.log(arraylen);
    for (var x = arraylen; x > arraylen - 3; x--) {
        product1 = product1 * sorted[x];
        console.log(product1);
    }
  
    product2 = sorted[0] * sorted[1] * sorted[arraylen];
  
    if (product1 > product2)  return product1;
  
    return product2;
  }


console.log(ComputeIntegers(unsorted))
