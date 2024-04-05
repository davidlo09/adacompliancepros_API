import http from 'http';
import app from './app';
require('dotenv').config();

const port = process.env.PORT;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});