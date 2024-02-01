const fetchUserData = username => new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
})

fetchUserData("btoone").then(data => console.log(data.url))