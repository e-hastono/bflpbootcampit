const isArithmeticProgression = numbers => {
    if (numbers.length < 2) return false

    const diff = numbers[0] - numbers[1]
    let isAP = true
    let i = 1

    do {
        if (numbers[i] - numbers[i + 1] !== diff) {
            isAP = false
            break
        }
        i++
    } while (i < numbers.length - 1)

    return isAP
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5]))
console.log(isArithmeticProgression([2, 4, 6, 12, 24]))
console.log(isArithmeticProgression([2, 4, 6, 8]))
console.log(isArithmeticProgression([2, 6, 18, 54]))
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9]))