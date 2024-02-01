const urutHuruf = text => text.split("").sort().join("")

console.log(urutHuruf("halo"))
console.log(urutHuruf("qwerty"))
console.log(urutHuruf("qwertyuiopasdfghjklzxcvbnm"))

const urutHurufSelf = text => {
    const arr = text.split("")

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < (arr.length - i); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr.join("")
}

console.log(urutHurufSelf("halo"))
console.log(urutHurufSelf("qwerty"))
console.log(urutHurufSelf("qwertyuiopasdfghjklzxcvbnm"))