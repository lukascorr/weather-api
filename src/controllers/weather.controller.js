const api_weathermap = 'http://api.weatherapi.com/v1'
const appId = '4992420a08c245ad90c31516211811'
const fetch = require('node-fetch');

const getLocation = async (req) => {
    return getUserLocation(req)
}

const getLocationWithTime = async (req) => {
    const location = getLocationOfRequest(req)

    const response = await fetch(api_weathermap + '/current.json?q=' + location + '&key=' + appId);
    return await response.json()
}

const getLocationWithFutureTime = async (req) => {
    const location = getLocationOfRequest(req)

    const response = await fetch(api_weathermap + '/forecast.json?q=' + location + '&days=5&key=' + appId);
    const data = await response.json()
    delete data.current

    return data
}

const getLocationOfRequest = (req) => {
    return req.params.city ? req.params.city : getUserLocation(req).city
}

const getUserLocation = (req) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var geoip = require('geoip-lite');

    return geoip.lookup(ip);
}

module.exports = {
    getLocation,
    getLocationWithTime,
    getLocationWithFutureTime,
}
