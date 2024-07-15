export default defineCachedEventHandler(
    (event) => {
        const list = getRouterParams(event, 'list')

        return list
    }
)