const express = require('express');
const app = express();

// root url
app.get('/', (req, res, next) => {
    res.send({
      msg: 'hello world',
    });
  }
);

// Dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
