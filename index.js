const express = require('express');

const server = express();


server.get('/', (req, res) => {
    res.send('<h1>Hello World now!</h1>');
  });

server.listen(8080);