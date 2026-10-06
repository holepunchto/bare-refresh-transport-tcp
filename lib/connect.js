const net = require('net')

module.exports = function connect(opts = {}) {
  const { port, host = '127.0.0.1' } = opts

  return net.connect(port, host)
}
