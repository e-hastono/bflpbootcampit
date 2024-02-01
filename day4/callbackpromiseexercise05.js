const promiseChainingPostComments = () => fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(data => (console.log(`Posts: ${data.length}`), null))
    .then(_ => fetch(`https://jsonplaceholder.typicode.com/comments`))
    .then(response => response.json())
    .then(data => (console.log(`Comments: ${data.length}`), null))

promiseChainingPostComments()