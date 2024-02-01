const loadImage = imageUrl => new Promise((resolve, reject) => {
    fetch(imageUrl)
        .then(response => response.status === 404 ? reject('<img src="error.png" />') : resolve(`<img src="${imageUrl}" />`))
})

loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/1200px-Stack_Overflow_icon.svg.png").then(response => console.log(response))