const express = require('express');
const routes = require('./routes')

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => {
  console.log(`servidor rodando em: http://localhost:${port}/produtos `);
});

module.exports = app;