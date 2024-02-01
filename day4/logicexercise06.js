const gcd = (num1, num2) => {
    while (num2) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1
}

console.log(gcd(12, 16))
console.log(gcd(50, 40))
console.log(gcd(22, 99))
console.log(gcd(24, 36))
console.log(gcd(17, 23))