import connect from './lib/connect'
import listen from './lib/listen'

/** The specifier of `connect()`, for the generated entry of a development build to require. */
declare const client: 'bare-refresh-transport-tcp/connect'

export { client, connect, listen }
