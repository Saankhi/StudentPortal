const http = require('http')

const app = require('./app')

const Server = http.createServer(app)

const port = process.env.PORT || 5000

Server.listen(port)

//console.log("Server is listening at port" , port)




