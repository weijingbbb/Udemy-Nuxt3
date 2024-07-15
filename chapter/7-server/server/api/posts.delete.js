export default defineEventHandler(async (event) => {
    const posts = [
        { id: 1, title: '111' },
        { id: 2, title: '222' },
        { id: 3, title: '333' },
        { id: 4, title: '444' },
    ]

    const body = await readBody(event)
    const id = body.id
    const index = posts.findIndex(p => p.id === id)
    posts.splice(index, 1)

    return posts
})