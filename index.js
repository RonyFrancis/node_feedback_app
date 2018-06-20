const express = require('express');
const app = express();

app.get('/hello', (req, res, next) => {
    res.send({
      msg: 'hello world!',
    });
  }
);

// Dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
