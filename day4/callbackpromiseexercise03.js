const loadImage = async (imageUrl, callback = null) => {
    const response = await fetch(imageUrl)

    if (typeof callback === "function") return callback(imageUrl, response.status)

    return response
}

const imageTag = (imageUrl, httpCode) => {
    if (httpCode === 404) {
        return '<img src="error.png" />'
    } else {
        return `<img src="${imageUrl}" />`
    }
}

loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/1200px-Stack_Overflow_icon.svg.png", imageTag).then(response => console.log(response))