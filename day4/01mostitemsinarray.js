const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const modeOfArray = (arr) => {
    if (arr.length == 0) return [null, null]

    let itemCounter = {}
    let maxItem = arr[0]
    let maxCount = 1

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]

        itemCounter[item] = (itemCounter[item] || 0) + 1

        if (itemCounter[item] > maxCount) {
            maxItem = item
            maxCount = itemCounter[item]
        }
    }

    return [maxItem, maxCount]
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