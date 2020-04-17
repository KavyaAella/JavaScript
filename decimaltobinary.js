function decimalToBinary(digit) {
    if(digit >= 1) {
      
      if (digit % 2) {
        return decimalToBinary((digit - 1) / 2) + 1;
      } else {
    
        return decimalToBinary(digit / 2) + 0;
      }
    } else {
      // Exit condition
      return '';
    }
  }
  console.log(decimalToBinary(1000));
