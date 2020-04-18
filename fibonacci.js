//  O(n) time complexities
function fibonacci(num){
  let a =0,b =1, temp;
  while(num>=1){
      temp = a ;
      a = a+b;
      b= temp;
      num--;

  }
return b
}
console.log(fibonacci(5));

// O(2^N) time complexity;
function fibonaccis(n){
    if(n<=1) return 1;

    return fibonaccis(n-1)+fibonaccis(n-2)
}
console.log(fibonaccis(6));

function fibonaci(num, memo) {
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

console.log(fibonaci(6,6))