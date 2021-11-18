const server = require('./app')({
    logger: true
})
var ip = require('ip');

server.listen(3000, ip.address())
