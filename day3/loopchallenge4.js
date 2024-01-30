const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

// const cetakSegitiga = () => {
//     const rl = readline.createInterface({ input, output })

//     rl.question('Masukkan angka: ', (size) => {
//         for (let i = 0; i < size; i++) {
//             console.log(`${'*'.repeat(i + 1)}`.padStart(size, ' '))
//         }

//         rl.close()
//     })
// }

// cetakSegitiga()

// const cetakSegitigaPagar = () => {
//     const rl = readline.createInterface({ input, output })

//     rl.question('Masukkan angka: ', (size) => {
//         for (let i = 0; i < size; i++) {
//             console.log(`${'#*'.repeat(Math.ceil(size / 2))}`.slice(-(i + 1)).padStart(size, ' '))
//         }

//         rl.close()
//     })
// }

// cetakSegitigaPagar()

const cetakSegitigaPiramida = () => {
    const rl = readline.createInterface({ input, output })

    rl.question('Masukkan angka: ', (size) => {
        for (let i = 0; i < size; i++) {
            console.log(`${'*'.repeat(i + 1).padStart(size, ' ')}${'*'.repeat(i)}`)
        }

        rl.close()
    })
}

cetakSegitigaPiramida()