export default defineEventHandler(
    async (event) => {
        const body = await getQuery(event)
        const name = body.name

        return name
    }
)