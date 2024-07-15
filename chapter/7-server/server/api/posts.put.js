export default defineEventHandler(async(event) => {
    const posts = [
        { id: 1, title: '111' },
        { id: 2, title: '222' },
        { id: 3, title: '333' },
        { id: 4, title: '444' },
    ]

    const body = await readBody(event)
    const id = body.id
    const title = body.title
    const post = posts.find(p => p.id === id)
    post.title = title

    return posts
})