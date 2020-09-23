let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      if (key === 'w') {
        conn.write('Move: up');
      }
      if (key === 'a') {
        conn.write('Move: left');
      }
      if (key === 's') {
        conn.write('Move: down');
      }
      if (key === 'd') {
        conn.write('Move: right');
      }
      if (key === 'q') {
        conn.write('Say: Shazbot!');
      }
      if (key === 'e') {
        conn.write('Say: Nice play!');
      }
      if (key === 'z') {
        conn.write('Say: I\'m growing');
      }
      if (key === 'f') {
        conn.write('Say: Lomg');
      }
      if (key === 'r') {
        conn.write('Say: Henlo');
      }
      if (key === 'x') {
        conn.write('Say: This one\'s mine!');
      }
      // \u0003 maps to ctrl+c input
      if (key === '\u0003') {
        process.exit();
      }
    });
  }
  handleUserInput();
  return stdin;
}

module.exports = setupInput;