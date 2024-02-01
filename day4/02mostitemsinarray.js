const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const modeOfArray = (arr) => {
    if (arr.length === 0) return [null, null]

    const itemCounterStr = arr.reduce((currCounter, item) => {
        if (typeof item === "number") return currCounter

        currCounter[item] = (currCounter[item] || 0) + 1

        if (currCounter.maxCount < currCounter[item]) {
            currCounter.maxItem = item
            currCounter.maxCount = currCounter[item]
        }

        return currCounter
    }, { maxItem: arr[0], maxCount: 1 })

    const itemCounterNum = arr.reduce((currCounter, item) => {
        if (typeof item !== "number") return currCounter

        currCounter[item] = (currCounter[item] || 0) + 1

        if (currCounter.maxCount < currCounter[item]) {
            currCounter.maxItem = item
            currCounter.maxCount = currCounter[item]
        }

        return currCounter
    }, { maxItem: arr[0], maxCount: 1 })

    if (itemCounterStr.maxCount > itemCounterNum.maxCount) return [itemCounterStr.maxItem, itemCounterStr.maxCount]

    return [itemCounterNum.maxItem, itemCounterNum.maxCount]
}

const printMostItemsInArray = () => {
    const rl = readline.createInterface({ input, output })

    // rl.question('Masukkan semua elemen array: ', (arrayInput) => {
    // const itemArray = arrayInput.trim().split(" ").filter(n => n !== "")
    const itemArray = [5, 5, 7, 1, "b", "a", "a", "a", "c", 7, "5", "5"]

    const [modeItem, modeCount] = modeOfArray(itemArray)

    console.log(`${modeItem}  ${modeCount}`)

    rl.close()
    // })
}

printMostItemsInArray()