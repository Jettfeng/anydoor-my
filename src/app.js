const http = require('http');
const chalk = require('chalk');
const path = require('path');
const conf = require('./config/defaultConfig');
const route = require('./helper/route');
const server = http.createServer((req, res) => {
 
  const filePath = path.join(conf.root,req.url);
  route(req,res,filePath)
});

server.listen(conf.port, conf.hostname, () => {
  console.log(`Server running at http://${conf.hostname}:${conf.port}/`);
  const addr = `http://${conf.hostname}:${conf.port}/`;
  console.log(`Server running at ${chalk.green(addr)}`);
});