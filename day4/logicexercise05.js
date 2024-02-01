const threeSpaceAB = text => {
    let isPresent = false

    const arr = text.split("")

    for (let i = 0; i < arr.length - 4; i++) {
        if (arr[i] === "a") {
            if (arr[i + 4] === "b") {
                isPresent = true
                break
            }
        } else if (arr[i] === "b") {
            if (arr[i + 4] === "a") {
                isPresent = true
                break
            }
        }
    }

    return isPresent
}

console.log(threeSpaceAB('lane borrowed'))
console.log(threeSpaceAB('i am sick'))
console.log(threeSpaceAB('you are boring'))
console.log(threeSpaceAB('barbarian'))
console.log(threeSpaceAB('bacon and meat'))