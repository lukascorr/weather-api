const controller = require('../controllers/weather.controller')

const base = '/v1'
const routes = [
    {
        url: base + '/location',
        method: 'GET',
        handler: controller.getLocation
    },
    {
        url: base + '/current/:city?',
        method: 'GET',
        handler: controller.getLocationWithTime
    },
    {
        url: base + '/forecast/:city?',
        method: 'GET',
        handler: controller.getLocationWithFutureTime
    }
]

module.exports = routes
