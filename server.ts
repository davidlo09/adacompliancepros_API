import http from 'http';
import app from './src/app';
require('dotenv').config();
import utils from './src/utils';

const port = process.env.PORT as string;

const server = http.createServer(app);

server.listen(port, () => {
  utils.startServerLogger(port);
});