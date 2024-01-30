const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const threeLargestMultiply = () => {
    const rl = readline.createInterface({ input, output })

    rl.question('Masukkan semua angka dalam array: ', (rawNumbers) => {
        const numberArray = rawNumbers.trim().split(" ").filter(n => n !== "" && !isNaN(n)).map(n => parseInt(n))

        if (numberArray.length >= 3) {
            const numberSet = new Set(numberArray)

            const uniqueNumberArray = Array.from(numberSet).sort((a, b) => a - b)

            if (uniqueNumberArray.length === 1) {
                console.log(uniqueNumberArray[0])
            } else if (uniqueNumberArray.length === 2) {
                console.log(uniqueNumberArray[0] * uniqueNumberArray[1])
            } else {
                console.log(uniqueNumberArray.slice(-3).reduce((current, number) => current * number, 1))
            }
        } else {
            console.log("jumlah angka < 3")
        }

        rl.close()
    })
}

threeLargestMultiply()