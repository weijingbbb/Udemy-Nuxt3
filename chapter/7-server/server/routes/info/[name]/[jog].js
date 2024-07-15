export default defineCachedEventHandler(
    (event) => {
        // const name = event.context.params.name
        // const jog = event.context.params.jog
        const name = getRouterParams(event, 'name')
        const jog = getRouterParams(event, 'jog')

        return {
            name,
            jog
        }
    }
)