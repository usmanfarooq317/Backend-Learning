const http = require('http');


const hostname = '127.0.0.1';
const port = 3000;

// Creating the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(<h1>'Server is running\n'</h1>);
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
