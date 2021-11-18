const { test } = require('tap')
const build = require('../src/app')

test('location', async t => {
    const app = build()

    const response = await app.inject({
        method: 'GET',
        url: '/v1/location'
    })
    const body = JSON.parse(response.payload);

    t.equal(response.statusCode, 200)
    t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
})

test('current', async t => {
    const app = build()

    const response = await app.inject({
        method: 'GET',
        url: '/v1/location'
    })
    const body = JSON.parse(response.payload);

    t.equal(response.statusCode, 200)
    t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
})

test('current/city', async t => {
    const app = build()

    const response = await app.inject({
        method: 'GET',
        url: '/v1/current/barcelona'
    })
    const body = JSON.parse(response.payload);

    t.equal(response.statusCode, 200)
    t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
    t.equal(body.location.country, 'Spain')
    t.equal(body.current.hasOwnProperty('temp_c'), true)
})

test('forecast', async t => {
    const app = build()

    const response = await app.inject({
        method: 'GET',
        url: '/v1/forecast'
    })
    const body = JSON.parse(response.payload);

    t.equal(response.statusCode, 200)
    t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
})

test('forecast/city', async t => {
    const app = build()

    const response = await app.inject({
        method: 'GET',
        url: '/v1/forecast/paris'
    })
    const body = JSON.parse(response.payload);

    t.equal(response.statusCode, 200)
    t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
    t.equal(body.location.country, 'France')
    t.equal(body.forecast.forecastday.length, 3)
    t.equal(body.forecast.forecastday[0].day.hasOwnProperty('maxtemp_c'), true)
})
