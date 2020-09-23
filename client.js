const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log('Connected to the server!');
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    conn.write('Name: NK');
  });
  // conn.on('connect', () => {
    // conn.write('Move: up');
    // setInterval(function () { conn.write('Move: left') }, 3000); Hardcoded move around messages
  // });
  return conn;
}

module.exports = connect;