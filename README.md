# bare-refresh-transport-tcp

TCP transport for <https://github.com/holepunchto/bare-refresh>. The server listens with `listen()`, and the application connects with `connect()`, which is a separate module so that a development build only includes the half it uses.

```
npm i bare-refresh-transport-tcp
```

## Usage

```js
const RefreshServer = require('bare-refresh/server')
const listen = require('bare-refresh-transport-tcp/listen')

const server = new RefreshServer(async () => {
  // Pack the application and return the bundle
})

listen(server, { port: 9000 })
```

In the application:

```js
const boot = require('bare-refresh/boot')
const connect = require('bare-refresh-transport-tcp/connect')

boot(bundle, { connect, options: { port: 9000 } })
```

## License

Apache-2.0
