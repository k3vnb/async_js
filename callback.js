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

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000)
}


createPost({ title: 'Post Three', body: 'This is posts 3' }, getPosts)