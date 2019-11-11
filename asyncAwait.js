const posts = [
    { title: 'Post One', body: 'Here is post 1' },
    { title: 'Post Two', body: 'Here is post 2' }
]

function getPosts(){
    setTimeout(() => {
        let output = ''
        posts.forEach((post, i) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

function createPost(post){
    return new Promise((resolve, reject) => {      
        setTimeout(() => {
            posts.push(post)
    
            const error = false
            // set error to true to see .catch() in action
            
            if (!error){
                resolve()
            } else {
                reject('Error: Something went wrong!!')
            }
        }, 2000)
    })
}

//Async / Await
async function init(){
   await createPost({ title: 'Post Three', body: 'This is post three'})

   getPosts()
}
init()