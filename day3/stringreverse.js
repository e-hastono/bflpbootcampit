const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const reverseString = () => {
    const rl = readline.createInterface({ input, output })

    rl.question('Masukkan string: ', (stringToReverse) => {
        const reversedString = stringToReverse.split('').reduce((currentString, letter) => `${letter}${currentString}`, "")

        console.log(reversedString)

        if (stringToReverse === reversedString) console.log("palindrom")

        rl.close()
    })
}

reverseString()