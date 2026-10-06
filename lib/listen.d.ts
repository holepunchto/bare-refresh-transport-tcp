import { TCPServer, TCPSocket } from 'bare-tcp'

/**
 * Accept connections on `port` and pass each socket to `server.connect()`. `host` defaults to
 * `0.0.0.0`. Returns the TCP server, which the caller closes.
 */
declare function listen(
  server: { connect(socket: TCPSocket): unknown },
  opts: { port: number; host?: string }
): TCPServer

export = listen
