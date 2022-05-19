let findFactorial = (num) => {
    // base case
    if (num == 1)
        return 1
            //recursive case
    else {
        return num * findFactorial(num - 1)

    }

}

console.log(findFactorial(5)) // 120