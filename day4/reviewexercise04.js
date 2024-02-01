const oddOrEven = n => {
    if (isNaN(n)) {
        return "Invalid Data"
    }

    return n % 2 ? "ganjil" : "genap"
}

console.log(oddOrEven(2))
console.log(oddOrEven(3))
console.log(oddOrEven("3"))
console.log(oddOrEven(20))
console.log(oddOrEven(21))
console.log(oddOrEven("a"))