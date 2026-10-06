import { TCPSocket } from 'bare-tcp'

/** Connect to a server started with `listen()`. `host` defaults to `127.0.0.1`. */
declare function connect(opts: { port: number; host?: string }): TCPSocket

export = connect
