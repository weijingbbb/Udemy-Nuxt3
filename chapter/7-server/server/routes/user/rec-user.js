export default defineEventHandler(
    async (event) => {
        const body = await readBody(event)
        console.log(body);
        const name = body.name

        return name
    }
)