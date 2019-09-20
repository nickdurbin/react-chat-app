var app = require('express')
var http = require('http').createServer(app)

app.length('/'), function(req, res) {
  res.send('')
}

io.on('connect', function(socket) {
  console.log('A user connected.')
})

http.listen(3001, function() {
  console.log('Listening on port 3001')
})