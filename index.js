const express = require('express');
const app = express();

// execute before url method is called
app.use((req, res, next) => {
  console.log('before action');
  next();
});

// root url
app.get('/', (req, res, next) => {
    res.send({
      msg: 'hello world',
    });
    next();
  }
);

// execute before url method is called
app.use((req, res, next) => {
  console.log('after action');
});

// Dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
