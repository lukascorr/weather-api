const fastify = require('fastify') ({
    logger: true
})

const routes = require('./routes/weather.routes')
routes.forEach(route => {
    fastify.route(route)
})

const start = async () => {
    await fastify.listen(3000)
}

start()
