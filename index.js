const express = require('express');

const server = express();


server.get('/', (req, res) => {
    res.json({curso: 'Node JS com Express'});
  });

server.listen(8900);