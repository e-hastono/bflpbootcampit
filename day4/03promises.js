const firstPromise = () => (new Promise(resolve => {
    setTimeout(() => {
        console.log('first promise')
        resolve('first promise')
    }, 2000)
}))

const secondPromise = () => (new Promise(resolve => {
    setTimeout(() => {
        console.log('second promise')
        resolve('second promise')
    }, 3000)
}))

const thirdPromise = () => (new Promise(resolve => {
    setTimeout(() => {
        console.log('third promise')
        resolve('third promise')
    }, 2000)
}))

async function asyncParalel() {
    await Promise.all([firstPromise(), secondPromise(), thirdPromise()])

    console.log('done')
}

async function asyncSerial() {
    await firstPromise()
    await secondPromise()
    await thirdPromise()
    console.log('done')
}

asyncParalel()
// asyncSerial()