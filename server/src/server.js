const http = require('http')
const { app } = require('./app')

const server = http.createServer(app)

const PORT = 8000

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})