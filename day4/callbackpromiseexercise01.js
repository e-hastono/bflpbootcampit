const fetchUserData = async (username, callback = null) => {
    const rawResponse = await fetch(`https://api.github.com/users/${username}`)
    const response = await rawResponse.json()

    if (typeof callback === "function") return callback(response)

    return response
}

fetchUserData("btoone", response => response.url).then(url => { console.log(url) })
fetchUserData("btoone", response => `Name: ${response.name}`).then(name => { console.log(name) })