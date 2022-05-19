function gcd(num1, num2) {
    // Base Class
    if (!num2) {
        return num1
    } else {
        //recursive case
        return gcd(num2, num1 % num2)
    }

}

console.log(gcd(15, 12)) //3