export default defineEventHandler(
    (event) => {
        const list = getRouterParams(event, 'list')

        return list
    }
)