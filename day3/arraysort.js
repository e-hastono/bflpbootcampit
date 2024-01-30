const diySort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < (arr.length - i); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    arr.forEach(n => console.log(n))
}

let arr = [30, 32, 24, 26, 19, 17, 81]

diySort(arr)
