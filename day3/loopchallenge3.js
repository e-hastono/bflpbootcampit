const queueLoopWhile = () => {
    let i = 1

    while (i <= 120) {
        console.log(`Halo, saya urutan ke ${i}`)
        i++
    }
}

const queueLoopFor = () => {
    for (let i = 1; i <= 120; i++) {
        console.log(`Halo, saya urutan ke ${i}`)
    }
}

const queueLoopOdd = () => {
    for (let i = 1; i <= 120; i += 2) {
        console.log(`Halo, saya urutan ke ${i}`)
    }
}

queueLoopWhile()
queueLoopFor()
queueLoopOdd()