let numFromRange = (numFrom, numTo, result = []) => {
    // Base Case
    if (numFrom === numTo - 1) {
        return result
    } else {
        // Recursive Case
        result.push(numFrom + 1)
        return numFromRange(numFrom + 1, numTo, result)
    }
}
console.log(numFromRange(2, 9)) // [3,4,5,6,7,8]

///////  OR ///////////

function range(startNum, endNum) {
    if (endNum - startNum == 2) {
        return [startNum + 1]
    } else {
        let list = range(startNum, endNum - 1);
        list.push(endNum - 1)
        return list
    }
}
console.log(range(2, 9)) // [3,4,5,6,7,8]