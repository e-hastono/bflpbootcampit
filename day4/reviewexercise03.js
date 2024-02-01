const currentDate = new Date()

const currentDateISO = currentDate.toISOString()

const printCurrentDate = () => {
    console.log(currentDateISO)
}

printCurrentDate()

const getCurrentDate = () => {
    return currentDateISO
}

console.log(getCurrentDate())