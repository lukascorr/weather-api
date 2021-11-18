const fastify = require('fastify')
const routes = require('./routes/weather.routes')

function build(opts={}) {
    const app = fastify(opts)

    routes.forEach(route => {
        app.route(route)
    })

    return app
}

module.exports = build
