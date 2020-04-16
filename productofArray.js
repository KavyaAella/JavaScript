let starry =[2,2,4,1]

function productExceptSelf(numArray) {
	let product = 1,
    size = numArray.length,
	output = [];

	for (let x = 0; x < size; x++) {
		output.push(product);
        product = product * numArray[x];
        console.log(product);
    }
    console.log(output);

   product = 1;
	for (let i = size - 1; i > -1; i--) {
		output[i] = output[i] * product;
		product = product * numArray[i];
	}

  return output;
}
console.log(productExceptSelf(starry))