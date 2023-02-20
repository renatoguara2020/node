const express = require('express');

const server = express();


server.get('/curso/:id', (req, res) => {

  //const nome = req.query.nome;
  //const email = req.query.email;
  const id = req.params.id;
    res.json({curso: `Aprendendo ${id}`});
  });

server.listen(9200)