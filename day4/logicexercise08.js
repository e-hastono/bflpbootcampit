const listPrima = (num1, num2) => {
    const isPrimeArr = [false, false, ...Array.from({ length: num2 - 1 }, () => true)]

    for (let i = 2; i <= Math.floor(Math.sqrt(num2)); i++) {
        if (isPrimeArr[i]) {
            for (let j = i + i; j <= num2; j += i) {
                isPrimeArr[j] = false
            }
        }
    }

    const primeNumbers = isPrimeArr.slice(num1).reduce((result, element, index) => element ? (result.push(index + num1), result) : result, [])

    return primeNumbers
}

console.log(listPrima(1, 5))
console.log(listPrima(5, 10))
console.log(listPrima(10, 20))
console.log(listPrima(9900, 9973))