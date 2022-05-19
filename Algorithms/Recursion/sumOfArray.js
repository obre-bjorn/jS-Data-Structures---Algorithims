function sumArray(arr) {
    // Base Case
    if (arr.length == 1) {
        return arr[0]
    } else {
        // Recursive Case
        return arr.shift() + sumArray(arr);
    }
}

console.log(sumArray([2, 4, 6, 7]))