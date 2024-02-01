const isPrime = number => {
    let numberIsPrime = true

    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
            numberIsPrime = false
            break
        }
    }

    return numberIsPrime
}

console.log(isPrime(3))
console.log(isPrime(7))
console.log(isPrime(6))
console.log(isPrime(23))
console.log(isPrime(33))
console.log(isPrime(1037))