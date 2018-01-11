const http = require('http');
const chalk = require('chalk');
const conf = require('./config/defaultConfig');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<body>')
  res.write('Hello HTTP!')
  res.write('</body>')
  res.write('</html>')
  res.end();
  // 后面两句就可以直接写成：res.end('</html>')
});

server.listen(conf.port, conf.hostname, () => {
  console.log(`Server running at http://${conf.hostname}:${conf.port}/`);
  const addr = `http://${conf.hostname}:${conf.port}/`;
  console.log(`Server running at ${chalk.green(addr)}`);
});