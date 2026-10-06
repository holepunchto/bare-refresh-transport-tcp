const net = require('net')

module.exports = function listen(server, opts = {}) {
  const { port, host = '0.0.0.0' } = opts

  const sockets = net.createServer((socket) => {
    server.connect(socket)

    // A killed app leaves the socket writable, so it is closed once it ends
    // or fails.
    socket.on('error', () => socket.destroy())
    socket.on('end', () => socket.destroy())
  })

  sockets.listen(port, host)

  return sockets
}
