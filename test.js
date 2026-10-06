const test = require('brittle')
const { connect, listen } = require('.')

test('a client reaches the server over a socket', async (t) => {
  t.plan(2)

  const sockets = listen(
    {
      connect(socket) {
        socket.on('data', (data) => {
          t.is(data.toString(), 'hello', 'the server receives what the client sends')

          socket.end('world')
        })
      }
    },
    { port: 0 }
  )

  t.teardown(() => sockets.close())

  await new Promise((resolve) => sockets.on('listening', resolve))

  const socket = connect({ port: sockets.address().port })

  t.teardown(() => socket.destroy())

  socket.on('data', (data) => t.is(data.toString(), 'world', 'and the client what it replies'))

  socket.write('hello')
})
