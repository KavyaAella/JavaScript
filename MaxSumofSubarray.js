function findMaxAverage(numb, k) {

	var curr_max = 0;
	for (var i = 0; i < k; i++) {
		curr_max += numb[i];
	}

	var max_so_far = curr_max;

	for (var j = k; j < numb.length; j++) {
		curr_max += (numb[j] - numb[j - k]);
		max_so_far = Math.max(curr_max, max_so_far);
	}
	return max_so_far / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));


function findMaxSubArrayBruteForce(arr) {
    var max_so_far = Number.NEGATIVE_INFINITY;
    var leftIndex = 0,
        rightIndex = arr.length - 1,
        len = arr.length;

    for (var i = 0; i < len; i++) {

        for (var j = i; j < len; j++) {
            maxSum = 0;
            for (var k = i; k <= j; k++) {
                maxSum += arr[k];

                if (max_so_far < maxSum) {
                    leftIndex = i;
                    max_so_far = maxSum;
                    rightIndex = j;
                }
            }
        }
    }
    return {
        left: leftIndex,
        right: rightIndex,
        final_max_sum_subArray: max_so_far
    };
}

var array = [1, 12, -5, -6, 50, 3];

console.log(findMaxSubArrayBruteForce(array));